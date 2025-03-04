import "./navbarSmallScreen.css";
import logo from "../../media/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavbarSmallScreen = () => {

    const [showNavLinks, setShowNavLinks] = useState(false);

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
        setShowNavLinks(false);
    };

    const handleNavbarToggle = () => {
        if (showNavLinks) {
            setShowNavLinks(false);
        } else {
            setShowNavLinks(true);
        }
    }

    return (
        <div className="navbar-small-screen">
            <div onClick={() => handleNavbarToggle()}>
                <MenuIcon className="navbar-hambugr-menu"></MenuIcon>
            </div>
            <div className="brand-logo-small-screen">
                <img className="logo-image-small-screen" src={logo}></img>
            </div>
            {
                showNavLinks && <div className="navbar-toggle">
                    <p onClick={() => handleScroll("about-section")} className="nav-link-small-screen">About</p>
                    <p onClick={() => handleScroll("services-section")} className="nav-link-small-screen">Services</p>
                    <p onClick={() => handleScroll("clients-section")} className="nav-link-small-screen">Clients</p>
                    <p onClick={() => handleScroll("founder-note-section")} className="nav-link-small-screen">Founder's Note</p>
                    <p onClick={() => handleScroll("contact-section")} className="nav-link-small-screen">Contact</p>
                </div>
            }
        </div>
    )
}

export default NavbarSmallScreen;