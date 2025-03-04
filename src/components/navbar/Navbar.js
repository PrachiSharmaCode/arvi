import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../media/logo.png";

const Navbar = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100; // Adjust this value
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
            <div className="brand-logo fade-in-y">
                <img className="logo-image fade-in-y" src={logo}></img>
            </div>
            <div className="narbar-links">
                <p className="nav-link fade-in-y" onClick={() => handleScroll("about-section")}>About</p>
                <p className="nav-link fade-in-y" onClick={() => handleScroll("services-section")}>Services</p>
                <p className="nav-link fade-in-y" onClick={() => handleScroll("clients-section")}>Clients</p>
                <p className="nav-link fade-in-y" onClick={() => handleScroll("founder-note-section")}>Founder's Note</p>
                <p className="nav-link fade-in-y" onClick={() => handleScroll("contact-section")}>Contact</p>
            </div>
        </div>)
}

export default Navbar;