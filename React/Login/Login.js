import {Link} from "react-router-dom";
import "./Login.css";
function Login()
{
    return(
        <>
            <div class="login">
                <h1>LOGIN</h1>
                <form>
                    Email:<input type="email" placeholder="enter email address" id="email"/><br/><br/>
                    Password:<input type="password" placeholder="enter password" id="password"/><br/><br/>
                    <Link to="/home"><button>Login</button></Link>
                </form>
            </div>
        </>
    );

}

export default Login;