import './Login.css'
import {useHistory} from 'react-router-dom'
export default function Login()
{
    
    return(
        <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" placeholder="Enter username"/>
            <input type="password" placeholder="Enter password"/>
            <button>login</button>
            
            <p class="message">Not registered? </p>Create an account
          </form>
        </div>
      </div>
    );
}