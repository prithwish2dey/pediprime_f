// src/PatientProfile.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './profile.css'; // Optional: for styling
import img from './images/amits-baby.jpeg';
import { BmiGraph } from './bmi'; // Assuming BmiGraph is correctly imported
import { Link } from 'react-router-dom'; // Import Link for navigation

const PatientProfile = ({ name, fathersName, mothersName, age, sex, bloodGroup, appointmentId, lastAppointmentDate, image, weight, bmi, pulse, height, respiratoryRate, oxygenSaturation }) => {
  const [showBmiGraph, setShowBmiGraph] = useState(false);

  const handleBmiClick = () => {
    setShowBmiGraph(!showBmiGraph);
  };

  return (
    <div>
      <h1 className='doctorh1'>Your Treatment Information</h1>
    <div className="patient-profile">
      
      <div className="left-side-patient">
        
        <div className="patient-info"><h1 id="p" className='hd'>Patient profile</h1>
        <img src={image || img} alt={`${name}'s profile`} className="patient-image" />
          <h3 id="q">{name}</h3>
          <p><span>Father's Name: </span>{fathersName}</p>
          <p><span>Mother's Name: </span> {mothersName}</p>
          <p><span>Age:</span> {age}</p>
          <p><span>Sex: </span>{sex}</p>
          <p><span>Blood Group:</span> {bloodGroup}</p>
          <p><span>Appointment ID:</span> {appointmentId}</p>
          <p><span>Last Appointment Date:</span> {lastAppointmentDate}</p>
        </div>
      </div>
      <div className="right-side-patient">
        <h2 id="r" className='hd'>Additional Information</h2>
        <div className="card-container-profile">
          <div className="card">
            <div className="metric">Weight</div>
            <div>{weight} kg</div>
          </div>

          <div className="card">
            <div onClick={handleBmiClick} className="clickable metric" >BMI</div>
            <div>{bmi} kg/m<sup>2</sup></div>
          </div>

          <div className="card">
            <div className="metric">Pulse</div>
            <div>{pulse} bpm</div>
          </div>

          <div className="card">
            <div className="metric">Height</div>
            <div>{height} cm</div>
          </div>

          <div className="card">
            <div className="metric">Respiratory Rate</div>
            <div>{respiratoryRate} breaths/min</div>
          </div>
          <div className="card">
            <div className="metric">Oxygen Rate</div>
            <div>{oxygenSaturation} %</div>
          </div>
          
        </div>
        
      
        {showBmiGraph && <BmiGraph />}
        <a href="/Immunisation" class="view-profile-btn">Immunisation Analysis</a>
        <Link to="/appointments">
          <button id="btn" type="submit">View Your Prescription</button>
        </Link>

        <div className="view-prescription-container">
          <div className="element date">10 - June 203</div>
          <div className="element name">Dr. Dipesh Barman</div>
          <div className="element view" >View</div>
        </div>
        <div className="view-prescription-container">
          <div className="element date">2 - Jan 2024</div>
          <div className="element name">Dr. Dipesh Barman</div>
          <div className="element view" >View</div>
        </div>
      </div>
    </div>
    </div>
  );
};

PatientProfile.propTypes = {
  name: PropTypes.string.isRequired,
  fathersName: PropTypes.string.isRequired,
  mothersName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  sex: PropTypes.string.isRequired,
  bloodGroup: PropTypes.string.isRequired,
  appointmentId: PropTypes.string.isRequired,
  lastAppointmentDate: PropTypes.string.isRequired,
  image: PropTypes.string,
  weight: PropTypes.number.isRequired,
  bmi: PropTypes.number.isRequired,
  pulse: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  respiratoryRate: PropTypes.number.isRequired,
  oxygenSaturation: PropTypes.number.isRequired,
};

PatientProfile.defaultProps = {
  image: img,
};

export default PatientProfile;



