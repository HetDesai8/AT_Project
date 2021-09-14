import React from 'react';
import properties from './properties.png';
import './Homebody.css';
export default function Home_body() {
	return (
		<div>
			<br />
			<div class="jumbotron">
				<div class="contain text-center">
					<img src={properties} width="1000px" height="250px" />
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
			<div class="container">
				<button class="btn btn-primary btn-lg" >
					Limited Time Deals
				</button>
				&nbsp;&nbsp;
				<button class="btn btn-primary btn-lg" >
					Find Agent
				</button>
				&nbsp;&nbsp;
				<button class="btn btn-primary btn-lg" >
					Purchased Properties
				</button>
				&nbsp;&nbsp;
				<button class="btn btn-primary btn-lg" >
					Cart
				</button>
			</div>
		</div>
	);
}
