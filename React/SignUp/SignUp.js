import { Link } from "react-router-dom";
import "./SignUp.css";
function SignUp()
{
    return(
        <>
            <div class="signup">
                <h1>SIGNUP</h1>
                <form>
                    Name:<input type="text" placeholder="enter your name" id="name"/><br/><br/>
                    Email:<input type="email" placeholder="enter email address" id="email"/><br/><br/>
                    Set Password:<input type="password" placeholder="enter password" id="spwd"/><br/><br/>
                    Confirm Password:<input type="password" placeholder="enter confirm password"/><br/><br/>
                    <Link to="/login"><button>signup</button></Link>
                </form>
            </div>
        </>
    );

}

export default SignUp;