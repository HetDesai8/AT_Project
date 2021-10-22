import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Purchase_property()
{   
    let history=useHistory();
    const location = useLocation();
	console.log(location.pathname);
	const path = location.pathname.split('/')[2];
    const [data, setData] = useState();
    useEffect((req, res) => {
		return fetch(`http://localhost:5000/api/getFiles/${path}`)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setData(json);
			});
	}, []);
    const Buy = () => {
		console.log(data?.data._id)
		axios.post("http://localhost:5000/User/buyProperty",{'itemId':data?.data._id,'username':localStorage.getItem("username")})
		.then(res => {
			alert(res.data.message)
            // console.log(res.data)
			history.push("/Purchased")
		})

	   
	  }
    return (
        <div className="container">
            <h1>Buy Property</h1>
            <label >Name</label>
            <input type="text"  placeholder="Enter city" value={localStorage.getItem('username')} className="form-control" />
            <label >City</label>
            <input type="text"  placeholder="Enter city" value={data?.data.city} className="form-control" />
            <label >Address</label>
            <input type="text"  placeholder="Enter Adress" value={data?.data.address} className="form-control"  />
            <label >Pin code</label>
            <input type="text"  placeholder="Enter pincode" value={data?.data.pincode} className="form-control"  />
            <label >Dimension</label>
            <input type="text"  placeholder="Enter Dimension" value={data?.data.dimension} className="form-control"  />
            <label >Room details</label>
            <input type="text"  placeholder="Enter Room details .." value={data?.data.room} className="form-control" />
            <label >Price</label>
            <input type="text"  placeholder="Enter Price" value={data?.data.price} className="form-control"/>
            <label >Account no</label>
            <input type="text"  placeholder="Enter Your Account no" className="form-control" required/>
            
           
            <br/>
            <button type="button"  className="btn btn-dark" onClick={() => history.push("/")}>Back</button>&nbsp;&nbsp;
            <button type="button"  className="btn btn-dark" onClick={Buy}>Buy</button>&nbsp;&nbsp;
        


        </div>
    )
}