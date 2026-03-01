import Footer from "../Footer/Footer";
import "./Contact.css";
function Contact({email,phoneNum,address})
{
    return(
        <>
        <div class="contactpage">
        <div class="contact">
            <h1>CONTACT US</h1>
            <p>Let's start a conversation.</p>
            <p>Have a project in mind or need help with digital solutions? We’d love to hear from you. Reach out to NovaByte Solutions and let’s discuss how we can turn your ideas into impactful digital experiences.</p>
            <h2>Why Contact Us</h2>
            <ul>
                <li>Get expert guidance for your digital needs</li>
                <li>Discuss your project requirements</li>
                <li>Request a quote or consultation</li>
                <li>Get support or general inquiries</li>
                
            </ul>
            <p>We aim to respond promptly and provide clear, helpful communication at every step.</p>
            <h2>Contact Details</h2>
            <p>
                <b>Email:- </b>{email}<br/>
                <b>Phone No:- </b>{phoneNum}<br/>
                <b>Address:- </b>{address}
            </p>
        </div>
        <div class="Contact-Form">
            <h2>Contact Form</h2>
            <p>Fill out the form below and our team will get back to you as soon as possible.</p>
            <form>
                FullName:- <input type="text"placeholder="enter your full name"/><br/>
                Email Address:- <input type="email" placeholder="enter your email address"/><br/>
                Phone No:- <input type="text" placeholder="enter your phone number"/><br/>
                Message:- <input type="text"placeholder="Message"/><br/>
                <button>Send Message</button>
            </form>
        </div>
        <h4>Whether you’re a startup, a growing business, or an established organization, NovaByte Solutions is here to support your digital journey with reliable and scalable solutions.</h4>
        <br/>
        <h4>Have questions or ready to get started? Contact NovaByte Solutions today and let’s bring your ideas to life.</h4>
        </div>
        <Footer/>
        </>
    );

}

export default Contact;