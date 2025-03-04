import "./services.css";
import MenuIcon from '@mui/icons-material/Menu';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import WebIcon from '@mui/icons-material/Web';
import InsightsIcon from '@mui/icons-material/Insights';
import EngineeringSharpIcon from '@mui/icons-material/EngineeringSharp';
import SettingsSuggestSharpIcon from '@mui/icons-material/SettingsSuggestSharp';
import TransformSharpIcon from '@mui/icons-material/TransformSharp';


const Services = ({id}) => {


    const handleScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 50; // Adjust this value
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth"
            });
        }
    };

    let servies = [
        {
            name: "AI & Machine Learning",
            icon: SettingsSuggestSharpIcon,
            descriptio: "Intelligent automation & predictive analytics"
        },
        {
            name: "Data Engineering & Cloud Solutions",
            icon: LeaderboardIcon,
            descriptio: "Scalable data pipelines & cloud integration"
        }, 
        {
            name: "Web Development",
            icon: WebIcon,
            descriptio: "Dynamic, interactive, and user-friendly website & applications"
        }, 
        {
            name: "Business Intelligence & Analytics",
            icon: InsightsIcon,
            descriptio: "Data-driven insights for strategic growth"   
        },
        {
            name: "Digital Transformation Consulting",
            icon: TransformSharpIcon,
            descriptio: " Helping businesses embrace future-ready technology"   
        },
        {
            name: "Custom Software & SaaS Development",
            icon: EngineeringSharpIcon,
            descriptio: "Tailored solutions to meet unique business needs"   
        },];

    return (<div id={id} className="service-contaner">
        <div>
            <p className="section-heading">Our Services</p>
        </div>
        <div className="serivces-card-container">
            {
                servies.map((service) => {
                    return (
                        <div className="card">
                            <div className="top-circle">
                                {/* <MenuIcon className="service-icon"></MenuIcon> */}
                                <service.icon className="service-icon"></service.icon>
                            </div>
                            <div className="service-name-container fade-in-y">
                                <p className="service-name fade-in-y">{service.name}</p>
                                <p className="service-description fade-in-y">{service.descriptio}</p>
                            </div>
                            <button onClick={() => handleScroll("contact-section")} className="service-contact-button fade-in-y">Contact Us</button>
                        </div>
                    );
                })
            }
        </div>
    </div>)
}

export default Services;