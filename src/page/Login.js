import './Login.css'
import {useHistory} from 'react-router-dom'
import react,{useState} from 'react'
export default function Login ()
{
  const [uname,setuname]=useState("")
  const [pwd,setpwd]=useState("")
  const [unameErr,setunameErr]=useState(false)
  const [pwdErr,setpwdErr]=useState(false)

  function LoginHandle(e){
    if(uname.length<6 || pwd.length<6 ){
      alert("enter correct values");
    }
    e.preventDefault()
  }
  function unameHandler(e){
    let item = e.target.value;
    
    if(item.length<6)
    {
      setunameErr(true)
    }
    else{
      setunameErr(false)
    }
    setuname(item);

  }
  function pwdHandler(e){
    let item = e.target.value;
    
    if(item.length<6)
    {
      setpwdErr(true)
    }
    else{
      setpwdErr(false)
    
    }
    setpwd(item);
  }
  
  
    
    return(
        <div class="login-page">
        <div class="form">
        <form class="register-form" onSubmit={LoginHandle}>
            <input type="text" placeholder="Enter username" onChange={unameHandler}/>
            {unameErr?<p style={{color:"red",fontSize:"14px"}}> user name must be greater then 6 </p>:""}

            <input type="password"  placeholder="Enter password" onChange={pwdHandler}/>
            {pwdErr?<p style={{color:"red",fontSize:"14px"}}> Password must be greater then 6 </p>:""}

            <button>login</button>
            
            <p class="message">Not registered? </p>Create an account
          </form>
        </div>
      </div>
    );
  }
    
