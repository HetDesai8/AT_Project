
export default function Register()
{
    return(
        <div class="login-page">
        <div class="form">
          <form class="register-form">
            <input type="text" placeholder="Enter Firstname"/>
            <input type="text" placeholder="Enter Lastname"/>
            <input type="text" placeholder="Enter Username"/>
            <input type="password" placeholder="Enter Password"/>
            <input type="password" placeholder="Enter Confirm Password"/>
            <input type="email" placeholder="Email"/>
            
            <button>Signup</button>
            <p class="message">Already have an account? </p> Login
          </form>
        </div>
      </div>
    );
}