import React from 'react';
import './trackAppointment.css'; // Assuming you have a CSS file for styling
import img1 from "./images/img1.avif";
// import img2 from "./images/doctor-arrive.jpeg";
const TrackAppointment = () => {
  return (
    <div className="appointment-container">
      <header className="header">
        <button className="track-appointment-button">TRACK YOUR APPOINTMENT</button>
      </header>

      <div className="appointment-card">
        <div className="clinic-info">
          <>
          <img src={img1} alt={img1.name} className='img' />  
          <div className="clinic-details">
            <h2 id='a' className='clinic-name'>Paediprime</h2>
            <p><span>Location:</span> Dharmatala, Kolkata</p>
            <p><span>Doctor's Name :</span> Dr. Aritra Khan</p>
            <p><span>MBBS, MD (Pediatric)</span></p>
            <p><span>Appointment Date :</span> 21.03.2024</p>
            <p><span>Slot Time :</span> 9.00 am - 11.00 am</p>
            <p><span>Appointment ID :</span> 23467tgcvb</p>
            <p><span>Sl No. :</span> 23</p>
            <button className="view-profile-btn">View Profile</button>
          </div>
          </>
        </div>
        <button className="check-time-button">Check Your Time</button>
      </div>

      <div className="timing-info">
        <div className="timing-item">
          <i className="icon-home"></i>
          <div className="timing-details">
            <p>Clinic Opening Time</p>
            
          </div>
          <div className="time">
          <p>8.00 am</p>
          </div>
        </div>
        <div className="timing-item">
          <i className="icon-doctor"></i>
          <div className="timing-details">
            <p>Doctor Arrival Time</p>
            {/* <p className="delayed-time">9.00 am <span className="new-time">9.15 am</span></p> */}
          </div>
          <div className="time"><p className="delayed-time">9.00 am </p><span className="new-time">9.15 am</span></div>
        </div>
        <div className="timing-item">
          <i className="icon-patient"></i>
          <div className="timing-details">
            <p>n th Patient Enter</p>
            
          </div>
          <div className="time"><p>9.16 am</p></div>
        </div>
        <div className="timing-item">
          <i className="icon-your-time"></i>
          <div className="timing-details">
            <p>Your Time</p>
            
          </div>
          <div className="time"><p className="delayed-time">10.05 am</p> <span className="new-time">10.15 am</span></div>
        </div>
      </div>
    </div>
  );
};

export {TrackAppointment};