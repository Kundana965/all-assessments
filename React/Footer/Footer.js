import {Link} from "react-router-dom";
import "./Footer.css";
function Footer({cname})
{
    return(
        <>
            <div class="footer">
                <h2>{cname}</h2>
                <p>Building scalable digital solutions that solve real business problems through modern design and reliable technology.</p>
                <h2>🔗Quick Links</h2>
                <div class="quicklinks">
                    <Link to="/home"><li id="link">Home</li></Link>
                    <Link to="/aboutus"><li id="link">About</li></Link>
                    <Link to="/contact"><li id="link">Contact</li></Link>
                </div>
                
                <div class="socialmedia">
                    <h4>Follow Us</h4>
                    <p>Facebook:- Novabytes.solutions</p>
                    <p>Instagram:- Novabyte.solutions</p>
                    <p>LinkedIn:- Novabyte.solutions</p>
                </div>
                

            </div>
        </>
    );
}

export default Footer;