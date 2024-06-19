import React, { useState, useEffect } from 'react';
import './App.css';
import doctorImg1 from './images/d.jpg';
import axios from 'axios';

function DoctorAppointment() {
  const [patientLists, setPatientLists] = useState({
    '9Am-11Am': [],
    '2pm-4pm': [],
    '7pm-9pm': []
  });

  const [patientDetails, setPatientDetails] = useState({
    name: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    dateofappointment: '',
    age: '',
    gender: '',
    address: '',
    slot: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value
    });
  };

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    if (
      patientDetails.name &&
      patientDetails.age &&
      patientDetails.gender &&
      patientDetails.dateOfBirth &&
      patientDetails.dateofappointment &&
      patientDetails.address &&
      patientDetails.fathersName &&
      patientDetails.mothersName &&
      patientDetails.slot
    ) {
      axios.post('https://pediprime-backend.onrender.com/api/patients', patientDetails)
        .then(response => {
          console.log(response.data);
          alert(`Appointment booked with Dr. Arita Khan. Appointment number: ${response.data.appointmentNumber}`);
          const updatedLists = {
            ...patientLists,
            [response.data.slot]: [...patientLists[response.data.slot], response.data]
          };
          setPatientLists(updatedLists);
          setPatientDetails({
            name: '',
            fathersName: '',
            mothersName: '',
            dateOfBirth: '',
            dateofappointment: '',
            age: '',
            gender: '',
            address: '',
            slot: ''
          });
        })
        .catch(error => {
          console.error('Error submitting appointment:', error);
          alert('Error booking appointment. Please try again later.');
        });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  const handleClear = () => {
    setPatientDetails({
      name: '',
      fathersName: '',
      mothersName: '',
      dateOfBirth: '',
      dateofappointment: '',
      age: '',
      gender: '',
      address: '',
      slot: ''
    });
    setPatientLists({
      '9Am-11Am': [],
      '2pm-4pm': [],
      '7pm-9pm': []
    });
  };

  useEffect(() => {
    axios.get('https://pediprime-backend.onrender.com/api/patients')
      .then(response => {
        // Group patients by slot
        const groupedPatients = response.data.reduce((acc, patient) => {
          acc[patient.slot] = [...(acc[patient.slot] || []), patient];
          return acc;
        }, {});
        setPatientLists(groupedPatients);
      })
      .catch(error => {
        console.error('Error fetching patient data:', error);
      });
  }, []);

  return (
    <div className="doctor-appointment-container">
      <div className="middle-section">
        <div className="doctor-de">
          <h1 id="a" className='hd'>Doctor Information</h1>
          <img src={doctorImg1} alt="doctor image" />
          <p>
            <strong>Name:</strong> Dr. Arita Khan<br />
            <strong>Specialty:</strong> MBBS , MD (Pediatrics )<br />
            <strong>Clinic Time:</strong> Tuesday: 09.00am-12.00pm, 01.00pm - 04.00pm, 05.00pm - 08.00pm, Wednesday: 09.00am-12.00pm, 01.00pm - 04.00pm<br />
            <strong>Location:</strong> 123 Main Street, Dharmatala, Kolkata<br />
            <strong>Consultation Fees:</strong> 500 (may vary)<br />
            <strong>Contact:</strong> Mobile: +919832457567<br />
            <strong>Holiday:</strong> Sunday, Thursday<br />
            <strong>About Dr. Arita Khan:</strong> Dr. Arita Khan is a highly experienced cardiologist dedicated to providing personalized care to his patients. With over 15 years of experience in the field, he specializes in diagnosing and treating various heart conditions. Dr.Khan is known for his compassionate approach and commitment to delivering the highest quality of care to his patients.<br />
          </p>
        </div>
      </div>
      <div className="middle-section">
        <div className="book-appointment2">
          <div className="appointment-details2">
            <h2 id="f2">Book Appointment with Dr. Arita Khan</h2>
            <form onSubmit={handleSubmitAppointment}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={patientDetails.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Father's Name:</label>
                <input type="text" name="fathersName" value={patientDetails.fathersName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Mother's Name:</label>
                <input type="text" name="mothersName" value={patientDetails.mothersName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Date of Appointment:</label>
                <input type="date" name="dateofappointment" value={patientDetails.dateofappointment} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Slot:</label>
                <select name="slot" value={patientDetails.slot} onChange={handleInputChange}>
                  <option value="">Choose your given slot</option>
                  <option value="9Am-11Am">9Am-11Am</option>
                  <option value="2pm-4pm">2pm-4pm</option>
                  <option value="7pm-9pm">7pm-9pm</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth:</label>
                <input type="date" name="dateOfBirth" value={patientDetails.dateOfBirth} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Age:</label>
                <input type="text" name="age" value={patientDetails.age} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Gender:</label>
                <select name="gender" value={patientDetails.gender} onChange={handleInputChange}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input type="text" name="address" value={patientDetails.address} onChange={handleInputChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="patient-list">
        <h2 id="f">Booking Information</h2>
        <div className="slot-list">
          {Object.keys(patientLists).map(slot => (
            <div key={slot}>
              <h3>{slot}</h3>
              {patientLists[slot].length === 0 ? (
                <p>No appointments booked yet for this slot.</p>
              ) : (
                <ul>
                  {patientLists[slot].map((patient, index) => (
                    <li key={index}>
                      <strong>Serial Number:</strong> {patient.serialNumber}, {/* Display Serial Number */}
                      <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Gender:</strong> {patient.gender}, <strong>Address:</strong> {patient.address}, <strong>Date of Birth:</strong> {patient.dateOfBirth}, <strong>Father's Name:</strong> {patient.fathersName}, <strong>Mother's Name:</strong> {patient.mothersName}, <strong>Slot:</strong> {patient.slot}, <strong>Appointment Number:</strong> {patient.appointmentNumber}, <strong>Date of Appointment:</strong> {patient.dateofappointment}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export { DoctorAppointment };
