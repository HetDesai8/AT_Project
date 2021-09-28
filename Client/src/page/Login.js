import './Login.css'
import React ,{useState}from 'react';
import axios from "axios"
import {useHistory} from 'react-router-dom';
export default function Login({setLoginUser})
{   
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
  const login = () => {
    axios.post("http://localhost:5000/Login", user)
    .then(res => {
        alert(res.data.message)
        setLoginUser(res.data.user)
        res.data.message=="Login Successfull"?(history.push("/")):(history.push("/login"))
    })
  }
    return(
        <div class="login-page">
        <div class="form">
          
          <form class="login-form" method="post" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="username" value={user.username} placeholder="Enter username" onChange={manageData}/>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={manageData}/>
            <button onClick={login}>login</button>
            
            <p class="message">Not registered? </p>Create an account
          </form>
        </div>
      </div>
    );
}