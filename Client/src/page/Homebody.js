import React from 'react';
// import properties from './properties.png';
import './Homebody.css';
export default function Home_body() {

	const carou={
		marginLeft:"15%",
		width:"70%"
		
	};

	return (
		
		<div>
			<br />
			<div className="demo" style={carou}>
			<div className="jumbotron">
				<div className="contain text-center">
				<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/1600x900/?housing" className="d-block w-100" alt="..." height="300px"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?home" className="d-block w-100" alt="..." height="300px"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?house" className="d-block w-100" alt="..." height="300px"/>
    </div>
	<div className="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?building" className="d-block w-100" alt="..." height="300px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div></div>
					<h1>Real Estate Management System</h1>
				</div>

				<br />
			</div>
			<div className="search">
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

			<br />
			
		</div>
	);
		}