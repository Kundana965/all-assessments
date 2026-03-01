import Footer from "../Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
function Home({wheading,wdescription})
{
    return(
        <>
        <div class="background">
            <h1 id="wheading">{wheading}</h1>
            <div class="home">
                <div class="description">
                    <p>{wdescription}</p>
                </div>
                <div class="banner">
                    <img id="b1" src="/images/banner.jpg" alt="banner"/>  
                </div> 
            </div><hr/>
            <div class="section">
                <h2>What we do?</h2>
                <h4>Our services:</h4> 
                    <p>🌐 Website Design & Development</p>
                    <p>💻 Custom Software Solutions</p>
                    <p>📱 Web Applications</p>
                    <p>🎨 UI/UX Design</p>
                    <p>⚙️ Maintenance & Support</p>
                <p id="outline">
                    We don’t just build products — we build experiences that are fast, secure,
                    and easy to use.
                </p>
            </div><hr/>
            <div class="section">
                <h2>Why Choose Us?</h2>
                <h4>We provide:</h4>
                    <p>✅ User-focused design</p>
                    <p>✅ Clean, scalable code</p>
                    <p>✅ Transparent communication</p>
                    <p>✅ On-time delivery</p>
                    <p>✅ Continuous improvement</p>
                <p id="outline">Our approach blends creativity with technology to deliver results that matter.</p>
            </div><hr/>
            <div class="section">
                <h2>Any Queries?</h2>
                <Link to="/contact" id="contact1">Contact</Link>
                <p>Let’s build something impactful together.</p>
            </div><hr/>

        </div>
        
        
        <Footer/>


            
        </>
    );
}

export default Home;