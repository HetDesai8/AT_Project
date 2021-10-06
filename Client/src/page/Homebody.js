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
		// console.log(id)
		// 
		history.push(`/Property/${id}`)
	};

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
					<button type="button" className="btn btn-success">
						Cart
					</button>
				</span>
			)}
			<div className="search">
				<br />
				<form className="d-flex">
					<input
						className="form-control me-3"
						type="search"
						placeholder="Enter pincode or city name "
						aria-label="Search"
					/>
					<button className="btn btn-dark mx-4" type="submit">
						Search
					</button>
				</form>
			</div>
			<br/>
			
			<table><tr><div className="content">{multipleFiles.map((element, index) => (<td className="section">
					<div key={element._id}>
						
							<div className="card border-3">
								<img
									src={`http://localhost:5000/${element.files[0].filePath}`}
									className="card-img-top img-responsive set"
									alt="img"
									style={{ borderRadius: '50%' }}
								/>
							
								<div className="card-body">
									<p className="card-text">
										<h6 className="text-dark font-weight-bold">
											{element.city}
										</h6>
										{localStorage.getItem("token")==null?<div></div>:<h6 className="text-dark font-weight-bold">
											Price : {element.price}
										</h6>}
										<button
											className="btn btn-dark mx-4"
											type="submit"
											onClick={() => display(element._id)}
										>
											View more
										</button>
									</p>
								</div>
						</div>
					</div>
				</td>))}</div></tr></table>
				
			
		</div>
	);
}
