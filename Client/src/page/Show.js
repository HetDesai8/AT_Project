import React, {useState, useEffect} from "react";
import Upload from "./Upload";
import { getMultipleFiles} from './api';
function Show()
{
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
    return(
      <div clasName="container">
          <h1>Property Form</h1>
          <Upload getMultiple={() => getMultipleFilesList()}/>
          {/* {multipleFiles.map((element, index) =>
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
              )} */}
      </div>
    )
}
export default Show;