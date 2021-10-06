import Home from "./Home";

export default function Logout(){

    localStorage.removeItem("token")
    return(
        <div>
            <Home/>
            </div>
        
    )
}