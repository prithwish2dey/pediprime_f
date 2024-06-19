import React from 'react';
import "./Doctor.css";
import doctorImg1 from "./images/d.jpg";
import smsIcon from "./images/sma.webp"; // Import SMS icon
import voiceCallIcon from "./images/phone.jpg"; // Import voice call icon
import videoCallIcon from "./images/video.jpg"; // Import video call icon

function DoctorDetails() {
  return (
    <div className="doctor-appointment">
      <div className="top-section-doctor">
        <div className="doctor-details">
          
            <h1 className='doctorh1'>Doctor's Information</h1>
            
              <img id="dl" src={doctorImg1} alt="doctor image" />
              <strong>Name:</strong> Dr. Aritra Khan <br />
              <strong>Specialty:</strong> MBBS , MD (Pediatrics )<br />
              <strong>Consultation Fees:</strong> 500 Rs <br />
              <strong>About Dr. Aritra Khan:</strong>
              Dr. Aritra khan is a highly experienced Pediatrician dedicated to providing personalized care to his patients. With over 15 years of experience in the field, he specializes in diagnosing and treating various rare and harmful disorders . Dr. Aritra khan is known for his compassionate approach and commitment to delivering the highest quality of care to his patients .<br />
            
          
        </div>
        <div className="communication-icons">
          <h1 className='doctorh1'>Communication</h1>
          <div className="communication-options">
            <div className="communication-option">
            <img src={smsIcon} alt="SMS" />
            <p>SMS</p>
            <p>+91 94776 31753</p> {/* Add SMS number */}
          </div>
          <div className="communication-option">
            <img src={voiceCallIcon} alt="Voice Call" />
            <p>Voice Call</p>
            <p>+91 94776 31753</p> {/* Add phone number */}
          </div>
          <div className="communication-option">
            <img src={videoCallIcon} alt="Video Call" />
            <p>Video Call</p>
            <p>+91 94776 31753</p> {/* Add video call number */}
          </div>
          </div>
          
          
        </div>
      </div>



      <div className="right-section-doctor">
        <div className="clinic-info">
        <h1 className='doctorh1'>Clinic Information</h1>
        <div className="clinic1">
          <h3>Clinic 1</h3>
          <p id="u">
            <strong>Clinic’s Location 1:</strong> 123, Basantapur more, Arambagh, Hooghly - 712016, West Bengal, India.<br />
            <strong>Clinic’s Time:</strong><br />
            <strong>Tuesday:</strong> 09.00am- 12.00 pm<br />
            01.00pm - 04.00 pm<br />
            05.00pm - 08.00pm<br />
            <strong>Wednesday:</strong> 09.00am- 12.00 pm<br />
            01.00pm - 04.00 pm<br />
            <strong>Consultation Fees:</strong> 500 Rs<br />

          </p>

        </div>
        <div className="clinic2">
          <h3>Clinic 2</h3>
          <p id="u">
            <strong>Clinic’s Location 2:</strong> 123, Park Street, Kolkata - 700016, West Bengal, India.<br />
            <strong>Clinic’s Time:</strong><br />
            <strong>Tuesday:</strong> 09.00am- 12.00 pm<br />
            01.00pm - 04.00 pm<br />
            05.00pm - 08.00pm<br />
            <strong>Wednesday:</strong> 09.00am- 12.00 pm<br />
            01.00pm - 04.00 pm<br />
            <strong>Consultation Fees:</strong> 500 Rs<br />

          </p>

        </div>
      </div>
      </div>
      <div />
    </div>
  );
}

export { DoctorDetails };




