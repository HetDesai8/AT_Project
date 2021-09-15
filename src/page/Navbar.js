import React from 'react';
import {useHistory} from 'react-router-dom'
import Home_body from './Homebody';
export default function Navbar() {
	let history=useHistory();
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					<b>Real Estate Management System</b>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>

						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								About
							</a>
						</li>

                        <li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<ul class="nav navbar-nav navbar-right">
					<button type="button" class="btn btn-success" onClick={()=>history.push("/Login")}>
						Login
					</button>
					&nbsp;&nbsp;
					<button type="button" class="btn btn-success"  onClick={()=>history.push("/Register")}>
						Register
					</button>
				</ul>
			</div>
		</nav>

	);
}
