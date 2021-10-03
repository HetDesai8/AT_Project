import React ,{useState, useEffect} from "react";
import  {multipleFilesUpload} from './api'
function Upload(props) {
    const [multipleFiles, setMultipleFiles] = useState('');
    const [city, setCity] =  useState('');
    const [address, setAddress] =  useState('');
    const [pincode, setPincode] =  useState('');
    const [contact, setContact] =  useState('');
    const [dimension, setDimension] =  useState('');
    const [price, setPrice] =  useState('');

    // const [multipleProgress, setMultipleProgress] = useState(0);
    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        console.log(e.target.files);
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('city', city);
        formData.append('address', address);
        formData.append('pincode', pincode);
        formData.append('contact', contact);
        formData.append('dimension', dimension);
        formData.append('price', price);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData);
        setCity('');
        setContact('');
        setDimension('');
        setPincode('');
        setPrice('');
        setAddress('');
        props.getMultiple();
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
            <label >Price</label>
            <input type="text"  placeholder="Enter Price" value={price} className="form-control" onChange={(e) => setPrice(e.target.value) } />
            <label>Select Multiple Files</label>
            <input type="file"  className="form-control" onChange={(e) => MultipleFileChange(e)} multiple />
            <button type="button"  className="btn btn-dark" onClick={() => UploadMultipleFiles()}>Upload</button>

        </div>
    )
}
export default Upload;