import { useEffect, useState } from 'react';
import logo from "./media/logo.png"
import './App.css';
import Backdrop from './components/backdrop/Backdrop';
import GlassContainter from './components/glassContainer/GlassContainer';
import BackgroundBlobs from './components/backgroundBlobs/Background';

function App() {

  useEffect(() => {
    fadey();
  }, []);

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timer); 
    };

  }, [showMessage]);

  const fadey = () => {
    const elements = document.querySelectorAll(".fade-in-y");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }


  return (
    <div className="app-wrapper">
    {showMessage && (
      <div className={`loading-message ${!showMessage ? "loading-hidden" : ""}`}>
        <img className="loading-page-img fade-in-y  " src={logo} alt="Logo" />
        <p className='loding-message-text'><em>Exciting updates coming soon! Stay tuned. <br /> Meantime, feel free to explore our company details.</em></p>
      </div>
    )}

    <div id="about-section" className={`app-container ${showMessage ? "app-container-hidden" : ""}`}>
      <Backdrop />
      <GlassContainter />
    </div>
  </div>
  );
}

export default App;
