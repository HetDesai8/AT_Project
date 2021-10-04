import React,{useState,useEffect} from 'react';
// import properties from './properties.png';
import './Homebody.css';
import { getMultipleFiles} from './api';
export default function Home_body() {

	const carou = {
		marginLeft: "15%",
		width: "70%"

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
      }
      useEffect(() => {
        getMultipleFilesList();
      }, []);

	return (

		<div>
			<br />
			<div className="demo" style={carou}>
				<div className="jumbotron">
					<div className="contain text-center">
						<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img src="https://source.unsplash.com/1600x900/?housing" className="d-block w-100" alt="..." height="300px" />
								</div>
								<div className="carousel-item">
									<img src="https://source.unsplash.com/1600x900/?home" className="d-block w-100" alt="..." height="300px" />
								</div>
								<div className="carousel-item">
									<img src="https://source.unsplash.com/1600x900/?house" className="d-block w-100" alt="..." height="300px" />
								</div>
								<div className="carousel-item">
									<img src="https://source.unsplash.com/1600x900/?building" className="d-block w-100" alt="..." height="300px" />
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

			{/* <br />  {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.city}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <img src={`http://localhost:5000/${file.filePath}`} className="card-img-top img-responsive" alt="img"/>
                              {file.filePath}
                              </div>
                              
                          </div>
                       )}
                      </div>
                </div>
              )}  */}
             
		</div>
	);
}