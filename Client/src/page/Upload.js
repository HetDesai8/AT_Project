import React ,{useState} from "react";
import  {multipleFilesUpload} from './api';
import {useHistory} from 'react-router-dom';
function Upload() {
    let history=useHistory();
    const [multipleFiles, setMultipleFiles] = useState('');
    const [city, setCity] =  useState('');
    const [address, setAddress] =  useState('');
    const [pincode, setPincode] =  useState('');
    const [contact, setContact] =  useState('');
    const [dimension, setDimension] =  useState('');
    const [price, setPrice] =  useState('');
    const [room, setRoom] =  useState('');
    const [URL, setUrl] =  useState('');

    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('city', city);
        formData.append('address', address);
        formData.append('pincode', pincode);
        formData.append('contact', contact);
        formData.append('dimension', dimension);
        formData.append('price', price);
        formData.append('room',room);
        formData.append('URL',URL);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData);
        alert("Upload Successfully")
        history.push('/')
        setCity('');
        setContact('');
        setDimension('');
        setPincode('');
        setPrice('');
        setAddress('');
        setRoom('');
        setMultipleFiles('');
        setUrl('');
    }
    return (
        <div className="container">
            <label >City</label>
            <input type="text"  placeholder="Enter city" value={city} className="form-control" onChange={(e) => setCity(e.target.value) } />
            <label >Address</label>
            <input type="text"  placeholder="Enter Adress" value={address} className="form-control" onChange={(e) => setAddress(e.target.value) } />
            <label >Pin code</label>
            <input type="text"  placeholder="Enter pincode" value={pincode} className="form-control" onChange={(e) => setPincode(e.target.value) } />
            <label >Contact no</label>
            <input type="text"  placeholder="Enter contact no" value={contact} className="form-control" onChange={(e) => setContact(e.target.value) } />
            <label >Dimension</label>
            <input type="text"  placeholder="Enter Dimension" value={dimension} className="form-control" onChange={(e) => setDimension(e.target.value) } />
            <label >Room details</label>
            <input type="text"  placeholder="Enter Room details .." value={room} className="form-control" onChange={(e) => setRoom(e.target.value) } />
            <label >Price</label>
            <input type="text"  placeholder="Enter Price" value={price} className="form-control" onChange={(e) => setPrice(e.target.value) } />
            <label >URL</label>
            <input type="text"  placeholder="Enter Url for map .." value={URL} className="form-control" onChange={(e) => setUrl(e.target.value) } />
            <label>Select Multiple Files</label>
            <input type="file"  className="form-control"  onChange={(e) => MultipleFileChange(e)} multiple />
            <br/>
            <button type="button"  className="btn btn-dark" onClick={() => history.push("/")}>Back</button>&nbsp;&nbsp;
            <button type="button"  className="btn btn-dark" onClick={() => UploadMultipleFiles()}>Upload</button>


        </div>
    )
}
export default Upload;