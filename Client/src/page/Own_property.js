import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Purchase_property() {
    let history = useHistory();
    const [property, setProperty] = useState([])
    useEffect((req, res) => {
        axios.post("http://localhost:5000/User/viewProperty", { 'username': localStorage.getItem("username") })
            .then(res => {
                console.log(res.data)
                setProperty(res.data)
            })
    }, []);
    const display = (id) => {
        history.push(`/Property/${id}`)
    };
    return (
        <div className="container">
            <h1>Own Property</h1>
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
                    {property.data?.map((element, index) => (<tr class="table-warning">
                        <td><img
                            src={`http://localhost:5000/${element.files[0].filePath}`}
                            className="card-img-top img-responsive set"
                            alt="img"
                            style={{ borderRadius: '10%' }}
                        /></td>
                        <td>{element.city}</td>
                        <td>{element.price}</td>
                        <td><button type="button" className="btn btn-success" onClick={() => display(element._id)}>View</button>&nbsp;
                        </td>

                    </tr>))}
                </tbody>
            </table>

            <button type="button" className="btn btn-dark" onClick={() => history.push("/")}>Back</button>

        </div >
    )
}