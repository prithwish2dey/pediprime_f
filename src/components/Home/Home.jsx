import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

import findDoctor from './images/finddoctor.jpg';
import findClinic from './images/findclinic.png';
import treatmentData from './images/treatment data.png';  // Rename to avoid spaces
import trackAppointment from './images/medical_article.jpg';
import doctorInterface from './images/doctor interface.jpg';  // Rename to avoid spaces
import healthCoins from './images/healthcoins.png';
import medicalArticle from './images/medical_article.jpg';  
import childrenWithDoctor from './images/children picture with doctor.jpg';  

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path === '/doctor-interface') {
      navigate('/logindoctor');
    } else {
      if (!localStorage.getItem('authToken')) {
        navigate('/loginuser');
      } else {
        navigate(path);
      }
    }
  };

  return (
    <div className="home">
      <div className="banner-card">
        <img src={childrenWithDoctor} alt="Children with Doctor" /> 
        <div className="banner-text">
          <h1>India's First<br /> Affordable Next <br /> Generation Pediatrics<br /> Clinic Services<br /></h1>
          <p>A baby's smile is one of the <br /> most beautiful treasures in <br /> the world, so their happiness <br /> is most vital to us. We treat <br /> your child as if they were our <br /> own little brother or sister.</p>
        </div>
      </div>

      <div className="banner">
        <div className="left-side">
          <div className="discount">100% Free</div>
          <div className="date-range">01.04.2024 - 05.04.2024</div>
        </div>
        <div className="right-side">
          Your Consultant
        </div>
      </div>

      <div className="icon-container">
        <div className="icon" onClick={() => handleNavigation('/finddoctor')}>
          <img src={findDoctor} alt="Doctor Icon" />
          <div className="icon-label">Find Doctor</div>
        </div>
        
        <div className="icon" onClick={() => handleNavigation('/map')}>
          <img src={findClinic} alt="Clinic Icon" />
          <div className="icon-label">Book Appointment</div>
        </div>
        <div className="icon" onClick={() => handleNavigation('/profile2')}>
          <img src={treatmentData} alt="Treatment Data Icon" />
          <div className="icon-label">Your Treatment Data</div>
        </div>
        <div className="icon" onClick={() => handleNavigation('/trackAppointment')}>
          <img src={trackAppointment} alt="Track Appointment Icon" />
          <div className="icon-label">Track Your Appointment</div>
        </div>
        <div className="icon" onClick={() => handleNavigation('/doctor-interface')}>
          <img src={doctorInterface} alt="Doctor Interface Icon" />
          <div className="icon-label">Doctor's Interface</div>
        </div>
        <div className="icon" onClick={() => handleNavigation('/')}>
          <img src={healthCoins} alt="Health Coins Icon" />
          <div className="icon-label">Health Coins</div>
        </div>
        <div className="icon" onClick={() => handleNavigation('/')}>
          <img src={medicalArticle} alt="Medical Article Icon" />
          <div className="icon-label">Medical Article</div>
        </div>
      </div>

      <div className="join-us">
        <p>Join us today and experience the future healthcare.</p>
        <a href="/loginuser" className="signup-login-btn">Login</a>
      </div>
    </div>
  );
};

export default Home;
