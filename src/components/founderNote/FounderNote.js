import "./founderNote.css";
import founderImg from "../../media/founder.JPG";

const FounderNote = ({id}) => {
    return (<div id={id} className="founder-note-container">
        <div>
            <img className="founder-img " src={founderImg}></img>
        </div>
        <div className="founder-note-text-container">
            <h2 className="founder-note-heading fade-in-y">Founder's Note</h2>
            <p className="founder-note-text fade-in-y"> 
                <em>
                As a software developer, I have always been deeply aware of how transformative technologies like Web Development, 
                Data Engineering & Analysis, and AI Automation can be for businesses and industries. Technology is more than just code—it’s a 
                powerful enabler that helps organizations scale, innovate, and create a lasting impact on society.
                <br></br>
                <br></br>

                With this vision in mind, I founded ARVI Technologies and Consultation—a space where businesses, startups, and 
                organizations can harness cutting-edge technology to reach new heights. My goal has always been simple: to provide the best 
                technological solutions that empower businesses to grow, evolve, and make a difference.
                <br></br>
                <br></br>
                So here we are—driven by innovation, fueled by passion, and committed to transforming ideas into reality.
                </em>
            </p>
            <p className="founder-name  fade-in-y">- Saumya Bhardwaj</p>
        </div>
    </div>)
}

export default FounderNote;