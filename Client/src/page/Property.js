import { useState, useEffect } from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Property() {
    let history=useHistory();
	const location = useLocation();
	console.log(location.pathname);
	const path = location.pathname.split('/');
	const [data, setData] = useState();
	useEffect((req, res) => {
		return fetch(`http://localhost:5000/api/getFiles/${path[2]}`)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setData(json);
			});
	}, []);
	const AddIdToCart = () => {
		console.log(data?.data._id)
		axios.post("http://localhost:5000/User/AddItem",{'itemId':data?.data._id,'username':localStorage.getItem("username")})
		.then(res => {
			alert(res.data.message)
			history.push("/Cart")
		})

	   
	  }
	 const Purchase=(id)=>{
		 history.push(`/Purchase/${id}`);
	 }

	return (
		<div>
			<h1>House Details</h1>
            <br/>
			<table width="100%">
				<tr>
					<td align="center" width="37%">
						<div
							id="carouselExampleIndicators"
							class="carousel slide"
							data-bs-ride="carousel"
							style={{ width: '500px' }}
						>
							<div class="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="0"
									class="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="3"
									aria-label="Slide 4"
								></button>
							</div>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img
										src={`http://localhost:5000/${data?.data.files[0].filePath}`}
										class="d-block w-100"
										height="500px"
										alt="..."
                                        style={{borderRadius:"10%"}}
									/>
								</div>
								<div class="carousel-item">
									<img
										src={`http://localhost:5000/${data?.data.files[1].filePath}`}
										class="d-block w-100"
										height="500px"
										alt="..."
                                        style={{borderRadius:"10%"}}
									/>
								</div>
								<div class="carousel-item">
									<img
										src={`http://localhost:5000/${data?.data.files[2].filePath}`}
										class="d-block w-100"
										alt="..."
										height="500px"
                                        style={{borderRadius:"10%"}}
									/>
								</div>
								<div class="carousel-item">
									<img
										src={`http://localhost:5000/${data?.data.files[3].filePath}`}
										class="d-block w-100"
										alt="..."
										height="500px"
                                        style={{borderRadius:"10%"}}
									/>
								</div>
							</div>
							<button
								class="carousel-control-prev "
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span
									class="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button
								class="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<span
									class="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</td>
					<td align="center" width="30%" style={{fontFamily:"cursive",fontSize:"20px"}}>
						<b>City : </b>{data?.data.city}
						<hr color="black" width="120px"/>
						<b>Address : </b>{data?.data.address}
						<hr color="black" width="230px"/>
						<b>Price : </b>{data?.data.price}
						<hr color="black" width="150px"/>
						<b>Pincode : </b>{data?.data.pincode}
						<hr color="black" width="150px"/>
						<b>Contact : </b>{data?.data.contact}
						<hr color="black" width="200px"/>
						<b>Dimension : </b>{data?.data.dimension}
						<hr color="black" width="150px"/>
						<b>Room : </b>{data?.data.room}
						<hr color="black" width="85px"/>
                        <button type="button"  className="btn btn-dark" onClick={() => history.push("/")}>Back</button>&nbsp;&nbsp;
						<button type="button"  className="btn btn-dark" onClick={AddIdToCart}>Add to cart</button>&nbsp;&nbsp;
						<button type="button"  className="btn btn-dark" onClick={() => Purchase(data?.data._id)}>Buy</button>&nbsp;&nbsp;
					
					</td>
					<td width="33%">
					<iframe src={data?.data.URL} width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
					</td>
				</tr>
			</table>    
		</div>
	);
}
