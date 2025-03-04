import "./about.css";

const About = () => {

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


    return (
        <div className="company-about">
            <div className="about-container">
                <div className="tag-line ">
                    <p className="tag-line-text fade-in-y">Beyond Boundaries,</p>
                    <p className="tag-line-text fade-in-y">Beyond Technology.</p>
                </div>
                <div className="about-description ">
                    <p className="about-description-heading fade-in-y">
                        Innovate with Intelligence, Build with Precision
                    </p>
                    <p className="about-description-text fade-in-y">
                        At ARVI Technologies and Consultation, we craft seamless digital experiences through custom software,
                        AI-driven solutions, and dynamic web applications. <br></br> Whether it’s intelligent automation, scalable platforms,
                        or tailored software solutions, we blend innovation with technology to help businesses thrive in a
                        digital-first world.
                    </p>
                </div>
            </div>
            <div className="connection-call">
                <p className="connection-call-text fade-in-y">
                    <em>
                        Let’s transform ideas into reality—smart, efficient, and built for the future.
                    </em>
                </p>
                <button  className="connection-call-button fade-in-y">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default About;