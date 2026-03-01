import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar({home, about, contact, login, signup}){
    return(
        <>
        <div class="navbar">
            <div class="logo">
                <img id="logo" src="/images/clogo.jpg" alt="logo"/>
            </div>
            <div class="nav">
                <nav>
                    <ul>
                        <Link to="/" id="home"><li>{home}</li></Link>
                        <Link to="/aboutus" id="about"><li>{about}</li></Link>
                        <Link to="/contact" id="contact"><li>{contact}</li></Link>
                        <Link to="/login" id="login"><li>{login}</li></Link>
                        <Link to="/signup" id="signup"><li>{signup}</li></Link>
                    </ul>
                    
                </nav>
            </div>
        </div>
        </>
    );
}
export default Navbar;