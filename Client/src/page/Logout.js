import Home from "./Home";

export default function Logout(){

    localStorage.removeItem("token")
    localStorage.removeItem("username")
 
    return(
        <div>
            <Home/>
            </div>
        
    )
}