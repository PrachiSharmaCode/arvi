// import "./clients.css";
// import logo from "../../media/saffronLogo.png";
// import logo2 from "../../media/impluseLogo.png";
// import logo3 from "../../media/LionsISLogo.png";
// import logo4 from "../../media/lightHausLogo.png";
// import logo5 from "../../media/vardanlogo.png";
// import logo6 from "../../media/comptelLogo.png";
// import logo7 from "../../media/TheDealLogo.png";
// import logo8 from "../../media/professionalLogo.png";


// const Clients = ({id}) => {

//     const logos = [
//         logo, logo2, logo3, logo4, logo5, logo6, logo7, logo8
//     ];

//     return (<div id={id} className="client-container">
//         <div>
//             <p className="clinet-section-heading">Our Clients</p>
//         </div>
//         <div className="clients-logo">
           
//             {logos.map((src, index) => (
//                     <img key={index} className="client-logo" src={src} alt="Client Logo" />
//                 ))}
                
//                 {logos.map((src, index) => (
//                     <img key={`dup-${index}`} className="client-logo" src={src} alt="Client Logo" />
//                 ))}
//         </div>
//     </div>)
// }

// export default Clients;

import "./clients.css";
import logo from "../../media/saffronLogo.png";
import logo2 from "../../media/impluseLogo.png";
import logo3 from "../../media/LionsISLogo.png";
import logo4 from "../../media/lightHausLogo.png";
import logo5 from "../../media/vardanlogo.png";
import logo6 from "../../media/comptelLogo.png";
import logo7 from "../../media/TheDealLogo.png";
import logo8 from "../../media/professionalLogo.png";

const Clients = ({ id }) => {
    const logos = [logo, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    return (
        <div id={id} className="client-container">
            <p className="client-section-heading">Our Clients</p>
            
            <div className="clients-logo">
                {/* Original logos */}
                {logos.map((src, index) => (
                    <img key={index} className="client-logo" src={src} alt={`Client ${index}`} />
                ))}
                {/* Duplicate logos for smooth infinite scroll */}
                {logos.map((src, index) => (
                    <img key={`dup-${index}`} className="client-logo" src={src} alt={`Client ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default Clients;
