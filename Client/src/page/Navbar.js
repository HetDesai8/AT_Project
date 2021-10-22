import React from 'react';
import {useHistory,Link} from 'react-router-dom'

export default function Navbar() {
	let history=useHistory();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
				{/* <Link to='/'>Real Estate Management System</Link> */}
				Real Estate Management System
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
							  Home
							</a>

						</li>

					</ul>
				</div>
				<ul className="nav navbar-nav navbar-right">
				
					&nbsp;&nbsp;
					{localStorage.getItem("token")==null?(<span><button type="button" className="btn btn-success" onClick={()=>history.push("/Login")}>
						Login
					</button>
					&nbsp;&nbsp;
					<button type="button" className="btn btn-success"  onClick={()=>history.push("/Register")}>
						Register
					</button></span>):
					<span>
						
					(<button type="button" className="btn btn-success" onClick={()=>history.push("/Logout")}>
						Logout
					</button>)
						</span>}
				</ul>
			</div>
		</nav>

	);
}
