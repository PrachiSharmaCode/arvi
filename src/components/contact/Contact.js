import "./contact.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useState } from "react";


const Contact = ({id}) => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [message, setMessage] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [showAcknowledge, setShowAcknowledge] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleFormSubmition = () => {

        let hasError = false;
        setEmailError("");
        setNameError("");
        setPhoneError("");

        if (!name) {
            setNameError("Field required: You’re awesome, but what’s your name?");
            hasError = true;
        }
        if (!phone) {
            setPhoneError("Field required: Your phone number, please?");
            hasError = true;
        }

        if(email){
            if (!isValidEmail(email)) {
                setEmailError("Please enter a valid email address");
                hasError = true;
            }
        }


        if (!hasError) {
            handleSubmit();
            setShowAcknowledge(true);
        }

    }

    const handleSubmit = async () => {

        let data = {
            'name': name,
            'phone': phone,
            'email': email,
            'message': message
        }
      
        const response = await fetch("https://formspree.io/f/xxxxx", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: data }),
        });

        if (response.ok) {
            console.log("sent");
        } else {
            console.log("not sent");
        }
    };

    return (<div id={id} className="contact-container">
        <div className="contact-top-circle">

        </div>
        <div className="contact-text-container">
            <p className="contact-heading fade-in-y">Contact Us</p>
            <p className="contact-message fade-in-y">Got a query or idea? Let's connect!</p>
            <div className="social-icon-container">
                <div className="social-icon-row">
                    <a href={`https://wa.me/xxxxxxx`}
                        target="_blank"
                        rel="noopener noreferrer" className="fade-in-y">
                        <WhatsAppIcon className="social-icon"></WhatsAppIcon>
                    </a>
                    <a href="tel:+xxxxxxxxxx"
                        target="_blank"
                        rel="noopener noreferrer" className="fade-in-y">
                        <CallIcon className="social-icon"></CallIcon>
                    </a>
                </div>
                <div className="social-icon-row">
                    <a href={`https://www.linkedin.com/company/arvi-technologies-and-consultation/posts/?feedView=all`}
                        target="_blank"
                        rel="noopener noreferrer" className="fade-in-y">
                        <LinkedInIcon className="social-icon"></LinkedInIcon>
                    </a>
                    <a href={`https://www.instagram.com/arvi.technologies?igsh=eXVhcmh2MXMxYTk4`}
                        target="_blank"
                        rel="noopener noreferrer" className="fade-in-y">
                        <InstagramIcon className="social-icon"></InstagramIcon>
                    </a>
                </div>

            </div>
        </div>
        {
            !showAcknowledge && <div className="contact-form fade-in-y">
                <div>
                    <input onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Name"></input>
                    {nameError && <p className="error-message">{nameError}</p>}
                </div>
                <div>
                    <input type="tel" onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))} onChange={(e) => setPhone(e.target.value)} className="input-field" placeholder="Phone Number (e.g., +91 98909XXXXX)"></input>
                    {phoneError && <p className="error-message" >{phoneError}</p>}
                </div>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="Email"></input>
                    {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div>
                    <textarea onChange={(e) => setMessage(e.target.value)} className="input-field message-input" placeholder="Message"></textarea>
                </div>
                <button onClick={() => handleFormSubmition()} className="contact-button">Send</button>
            </div>
        }

        {
            showAcknowledge && <div className="ack-message">
                <p>Thanks for connecting with us! <br></br>You’re all set, we’ll be in touch soon.</p>
            </div>
        }

    </div>)
}

export default Contact;