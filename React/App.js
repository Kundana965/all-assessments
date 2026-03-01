
import AboutUs from './AboutUs/AboutUs';
import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Login from './Login/Login';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './SignUp/SignUp';
import { Axios } from 'axios';
import UsersTable from './Axios';
function App() {
  let navbar={
    home:'HOME',
    about:'ABOUT',
    contact:'CONTACT',
    login:'LOGIN',
    signup:'SIGNUP'
  }
  let comname='NovaByte Solutions';
  let wheading='Welcome to NovaByte Solutions';
  let wdescription='At NovaByte Solutions, we design and develop digital solutions that are simple, scalable, and effective. From modern, responsive websites to robust custom software, we focus on building technology that solves real business challenges. Our goal is to help businesses improve efficiency, strengthen their digital presence, and stay competitive in an ever-evolving digital landscape.';

  
  let about={
    ComDes:'NovaByte Solutions is a technology-driven company focused on delivering high-quality digital services for businesses of all sizes. We specialize in creating user-friendly websites, efficient software solutions, and innovative digital tools that help businesses grow in a digital-first world.',
    MissionStmt:'To simplify technology and create meaningful digital solutions that empower businesses to succeed.'
  }

  let contact={
    email:'support@novabytesolutions.com',
    phoneNum:'+91 98765 43210',
    address:'NovaByte Solutions, 2nd Floor, Tech Park Building, Madhapur, Hitech City, Hyderabad, Telangana – 500081, India'

  }
  
  
  return (
    <BrowserRouter>
      <Navbar home={navbar.home} about={navbar.about} contact={navbar.contact} login={navbar.login} signup={navbar.signup}/>
      <Routes>
        <Route path='/' element={<Home wheading={wheading} wdescription={wdescription}/>}/>
        <Route path='/home' element={<Home wheading={wheading} wdescription={wdescription}/>}/>
        <Route path='/aboutus' element={<AboutUs comname={comname} ComDes={about.ComDes} MissionStmt={about.MissionStmt}/>}/>
        <Route path='/contact' element={<Contact email={contact.email} phoneNum={contact.phoneNum} address={contact.address}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>

    </BrowserRouter>
    
    
//   return(
//     <>
//     <UsersTable/>
//     </>
  );
}

export default App;