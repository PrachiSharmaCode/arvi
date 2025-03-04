import "./glassContainer.css";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Services from "../services/Services";
import Clients from "../clients/Clients";
import Contact from "../contact/Contact";
import NavbarSmallScreen from "../navbarSmallScreen/NavbarSmallScreen";
import FounderNote from "../founderNote/FounderNote";

const GlassContainter = () => {
    return(<>
    <NavbarSmallScreen></NavbarSmallScreen>
    <Navbar></Navbar>
    <div className="glass-container">
        {/* <Navbar></Navbar> */}
        <About id="about-section"></About>
        <Services id="services-section"></Services>
        <Clients id="clients-section" ></Clients>
        <FounderNote id="founder-note-section"></FounderNote>
        <Contact id="contact-section"></Contact>
    </div></>)
}

export default GlassContainter;