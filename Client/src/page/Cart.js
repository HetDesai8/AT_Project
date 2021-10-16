import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Cart() {
	let history = useHistory();
	const [cart, setCart] = useState([])
	useEffect((req, res) => {
		axios.post("http://localhost:5000/User/ViewCart", { 'username': localStorage.getItem("username") })
			.then(res => {
				setCart(res.data)
			})
	}, []);
	const display = (id) => { 
		history.push(`/Property/${id}`)
	};
	const RemoveId=(id)=>{
		axios.post("http://localhost:5000/User/DeleteCart",{'itemId':id,'username':localStorage.getItem("username")})   
		.then(res => {
			alert(res.data.message)
			history.push('/')
			
		})

	}

	return (
		<div>
			<h1>Cart Items</h1>
			<div className="container">
			<table class="table table-striped table-hover table-bordered border-dark">
				
				<thead>
					<tr class="table-danger">
						<th scope="col">Image</th>
						<th scope="col">City</th>
						<th scope="col">Price</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
				{cart.data?.map((element, index) => (	<tr class="table-warning">
						<td><img
							src={`http://localhost:5000/${element.files[0].filePath}`}
							className="card-img-top img-responsive set"
							alt="img"
							style={{ borderRadius: '10%' }}
						/></td>
						<td>{element.city}</td>
						<td>{element.price}</td>
						<td><button type="button" className="btn btn-success" onClick={() => display(element._id)}>View</button>&nbsp;
						<button type="button" className="btn btn-danger" onClick={() => RemoveId(element._id)}>Remove</button></td>

					</tr>))}
				</tbody>
			</table>
			</div>
			<button type="button"  className="btn btn-dark" onClick={() => history.push("/")}>Back</button>

		</div>
	);
}
