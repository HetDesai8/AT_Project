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
			<div class="demo" style={carou}>
			<div class="jumbotron">
				<div class="contain text-center">
				<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/1600x900/?housing" class="d-block w-100" alt="..." height="300px"/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?home" class="d-block w-100" alt="..." height="300px"/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?house" class="d-block w-100" alt="..." height="300px"/>
    </div>
	<div class="carousel-item">
      <img src="https://source.unsplash.com/1600x900/?building" class="d-block w-100" alt="..." height="300px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div>
					<h1>Real Estate Management System</h1>
				</div>

				<br />
			</div>
			<div class="search">
				<form class="d-flex">
					<input
						class="form-control me-3"
						type="search"
						placeholder="Enter pincode or city name "
						aria-label="Search"
					/>
					<button class="btn btn-dark mx-4" type="submit">
						Search
					</button>
				</form>
			</div>

			<br />
			
		</div>
	);
		}