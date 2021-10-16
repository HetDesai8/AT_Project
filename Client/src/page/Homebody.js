import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Homebody.css';
import { getMultipleFiles } from './api';
export default function Home_body() {
	let history = useHistory();
	const carou = {
		marginLeft: '15%',
		width: '70%',
	};
	const [multipleFiles, setMultipleFiles] = useState([]);
	const [search, setSearch] = useState("");
	const getMultipleFilesList = async () => {
		try {
			const fileslist = await getMultipleFiles();
			setMultipleFiles(fileslist);
			console.log(multipleFiles);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMultipleFilesList();
	}, []);
	const display = (id) => {
		history.push(`/Property/${id}`)
	};
	const ChangeSearch = (e) => {
		setSearch(e.target.value)
		console.log(search)

	}
	const filterCity = multipleFiles.filter(element => {
		return element.city.toLowerCase().indexOf(search.toLowerCase()) !== -1
	})

	return (
		<div>
			<br />
			<div className="demo" style={carou}>
				<div className="jumbotron">
					<div className="contain text-center">
						<div
							id="carouselExampleFade"
							className="carousel slide carousel-fade"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img
										src="https://source.unsplash.com/1600x900/?housing"
										className="d-block w-100"
										alt="..."
										height="300px"
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://source.unsplash.com/1600x900/?home"
										className="d-block w-100"
										alt="..."
										height="300px"
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://source.unsplash.com/1600x900/?house"
										className="d-block w-100"
										alt="..."
										height="300px"
									/>
								</div>
								<div className="carousel-item">
									<img
										src="https://source.unsplash.com/1600x900/?building"
										className="d-block w-100"
										alt="..."
										height="300px"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleFade"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleFade"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{localStorage.getItem('token') == null ? (
				<span></span>
			) : (
				<span>
					<br />
					<button
						type="button"
						className="btn btn-info"
						onClick={() => history.push('/Upload')}
					>
						Sell Property
					</button>
					&nbsp;
					<button type="button" className="btn btn-warning">
						Purchase Property
					</button>
					&nbsp;
					<button type="button" className="btn btn-danger">
						Commercial
					</button>
					&nbsp;
					<button type="button" className="btn btn-success"
					onClick={() => history.push('/Cart')}
					>
						Cart
					</button>
				</span>
			)}
			<br />
			<div className="search">
				<br />
				<form className="d-flex" onSubmit={(e) => e.preventDefault()}>
					<input
						className="form-control me-3"
						type="search"
						placeholder="Search City... "
						aria-label="Search"
						onChange={ChangeSearch}
					/>
					<button className="btn btn-dark mx-4" type="submit">
						Search
					</button>
				</form>
			</div>
			<br/>
			<div className="container">
			<table class="table table-striped table-hover table-bordered ">
				
				<thead>
					<tr>
						<th scope="col">Image</th>
						<th scope="col">City</th>
						<th scope="col">Price</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
				{filterCity?.map((element, index) => (	<tr >
						<td><img
							src={`http://localhost:5000/${element.files[0].filePath}`}
							className="card-img-top img-responsive set"
							alt="img"
							style={{ borderRadius: '10%' }}
						/></td>
						<td>{element.city}</td>
						<td>{element.price}</td>
						<td><button type="button" className="btn btn-success" onClick={() => display(element._id)}>View</button></td>

					</tr>))}
				</tbody>
			</table>
			</div>
			
			
				
			
		</div>
	);
}
