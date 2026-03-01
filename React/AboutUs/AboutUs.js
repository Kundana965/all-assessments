import Footer from "../Footer/Footer";
import "./AboutUs.css";
function AboutUs({comname, ComDes,MissionStmt})
{
    return(
        <>   
        <div class="aboutus">
            <div class="about">
                <h1>{comname}</h1>
                <p>{ComDes}</p>
                
            </div><hr/>
            <div class="about">
                <h2>Our Mission</h2>
                <p>{MissionStmt}</p>
                <p>We aimto deliver solutions that are:</p>
                <p>1. Easy to use</p>
                <p>2. Reliable</p>
                <p>3. Future-ready</p>
            </div><hr/>
            <div class="about">
                <h2>Our Vision</h2>
                <p>To become a trusted digital partner for businesses by delivering innovative, scalable, and impactful technology solutions.</p>
            </div><hr/>
            <div class="about">
                <h2>Our Values</h2>
                <p>1. Simplicity – Clear designs and clean code</p>
                <p>2. Transparency – Honest communication at every step</p>
                <p>3. Innovation – Always improving, always learning</p>
                <p>4. Quality – No compromises</p>
            </div><hr/>
            <div class="about">
                <h2>Our Approach</h2>
                <p>We believe great digital products are built by understanding real problems first. Our team works closely with clients to understand their goals, then combines creativity, strategy, and technology to deliver solutions that make a difference.</p>
                <p id="outline">At NovaByte Solutions, we don’t just develop software — we build long-term digital value.</p>
            </div>
            
        </div> 
        <Footer/>
        </>
    );
}

export default AboutUs;