import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import SignUp from "../SignUp/SignUp";
import { BrowserRouter } from "react-router-dom";
import App from "../App.js";

function Landing()
{
    let navbar={
    home:'HOME',
    about:'ABOUT',
    contact:'CONTACT',
    login:'LOGIN',
    signup:'SIGNUP'
  }

  let wheading='Welcome to NovaByte Solutions';
  let wdescription='We build simple, reliable, and smart digital solutions to help businesses grow in the modern world.';
  
  let about={
    ComDes:'NovaByte Solutions is a technology-driven company focused on delivering high-quality digital services for businesses of all sizes. We specialize in creating user-friendly websites, efficient software solutions, and innovative digital tools that solve real-world problems.Our team believes in simplicity, transparency, and continuous improvement. By combining creativity with technology, we help our clients turn ideas into impactful digital experiences.',
    MissionStmt:'Our mission is to empower businesses with reliable and innovative digital solutions that enhance productivity, improve user experience, and drive long-term success.'
  }

  let contact={
    email:'support@novabytesolutions.com',
    phoneNum:'+91 98765 43210',
    address:'NovaByte Solutions, 2nd Floor, Tech Park Building, Madhapur, Hitech City, Hyderabad, Telangana – 500081, India'

  }
  let footer={
    cname:"NovaByte Solutions"
    
  }

  return(
    <>
    <Navbar home={navbar.home} about={navbar.about} contact={navbar.contact} login={navbar.login} signup={navbar.signup}/>
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
        
        
        <Home wheading={wheading} wdescription={wdescription}/>
        <AboutUs ComDes={about.ComDes} MissionStmt={about.MissionStmt}/>
        <Contact email={contact.email} phoneNum={contact.phoneNum} address={contact.address}/>
        <Login/>
        <SignUp/>
        <Footer cname={footer.cname}/>

    </>
  );
    
}
export default Landing;