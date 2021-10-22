import './Login.css'
import React ,{useState}from 'react';
import axios from "axios"
import {useHistory,Link,Redirect} from 'react-router-dom';
export default function Login({setLoginUser})
{  
  const [isLogin,setLogin]=useState(false); 
  const history = useHistory()
  const [user,manageUser]=useState({
    username:"",
    password:""
  })
  
  const manageData=e=>{
    const{name,value}=e.target;
    manageUser({
      ...user,
      [name]:value
    })
  
  }
  const check=()=>{
    localStorage.setItem("token","Logged in") 
    localStorage.setItem("username",user.username)
    setLogin(true)
    // console.log(isLogin)
    history.push("/")
  }
  const login = () => {
    axios.post("http://localhost:5000/User/Login", user)
    
    .then(res => {

        alert(res.data.message)
        res.data.message==="Login Successfully"?(check()):(history.push("/login"))
    })
   
  }
    return(
      <div>
        
        <div className="login-page">
        <div className="form">
          
          <form className="login-form" method="post" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="username" value={user.username} placeholder="Enter username" onChange={manageData}/>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={manageData}/>
            <button onClick={login}>login</button>
            
            <p className="message">Not registered? </p> <Link to='/register'>Create an account</Link>
          </form>
        </div>
      </div>
      </div>
    );
}