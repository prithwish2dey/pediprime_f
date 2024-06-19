import React, { useState } from 'react';
import axios from 'axios';
import './app2.css'; // Ensure your styles are in this file
import {Link } from "react-router-dom";
function DoctorInterface() {
  const [formData, setFormData] = useState({
    name: '',
    age: { years: 0, months: 0 },
    sex: '',
    present_visit: '',
    last_visit: '',
    visit_number: '',
    phone_number: '',
    email_address: '',
    medical_history: '',
    height: 0,
    weight: 0,
    bmi: 0,
    bp_systolic: 0,
    bp_diastolic: 0,
    heart_rate: 0,
    respiratory_rate: 0,
    oxygen_saturation: 0,
    blood_sugar: 0,
    chief_complain: '',
    other_findings: '',
    provisional_diagnosis: '',
    confirmation_tests: '',
    medications: [
      {
        type: '',
        name: '',
        dosage: '',
        amount: '',
        frequency: '',
        time_of_administration: '',
        duration: '',
        route: '',
        special_instructions: '',
        precautions: '',
      }
    ],
    prescription_duration: '',
    refills: 0,
    signature: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('age-')) {
      const ageField = name.split('-')[1];
      setFormData({
        ...formData,
        age: { ...formData.age, [ageField]: value }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleMedicationChange = (index, e) => {
    const { name, value } = e.target;
    const newMedications = formData.medications.map((med, medIndex) => {
      if (index === medIndex) {
        return { ...med, [name]: value };
      }
      return med;
    });
    setFormData({ ...formData, medications: newMedications });
  };

  const addMedicine = () => {
    setFormData({
      ...formData,
      medications: [
        ...formData.medications,
        {
          type: '',
          name: '',
          dosage: '',
          amount: '',
          frequency: '',
          time_of_administration: '',
          duration: '',
          route: '',
          special_instructions: '',
          precautions: '',
        }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pediprime-backend.onrender.com/api/prescription', formData);
      console.log('Prescription saved successfully:', response.data);
      window.alert('Your data has been submitted successfully!');
    } catch (error) {
      console.error('Error saving prescription:', error);
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request data:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  return (
    <div className="container">
      <div className='left-section'>
      <div className="header">
        <h1 className='hd'>DOCTOR'S INTERFACE</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="prescription-container">
          <div className="left-side-prescription">
            <h2>Patient's Personal Information :</h2>
            <div className="form-container">
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="name">Patient's Name :</label>
                  <input type="text" id="name" name="name" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="sex">Patient's Gender :</label>
                  <input type="text" id="sex" name="sex" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="age-years">Patient's Age :</label>
                  <input type="number" id="age-years" name="age-years" onChange={handleInputChange} />
                  <input type="number" id="age-months" name="age-months" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="present_visit">Date of Current Visit :</label>
                  <input type="date" id="present_visit" name="present_visit" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="phone_number">Ph. No. :</label>
                  <input type="text" id="phone_number" name="phone_number" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="last_visit">Date of First Visit :</label>
                  <input type="date" id="last_visit" name="last_visit" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="email_address">Email :</label>
                  <input type="email" id="email_address" name="email_address" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="visit_number">Number of Follow Ups :</label>
                  <input type="text" id="visit_number" name="visit_number" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="appointment_id">Appointment ID :</label>
                  <input type="text" id="appointment_id" name="appointment_id" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <h2>Patient's Basic General Examination Information:</h2>
            <div className="form-container">
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="height">Height:</label>
                  <input type="number" id="height" name="height" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="weight">Weight:</label>
                  <input type="number" id="weight" name="weight" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="bmi">BMI:</label>
                  <input type="number" id="bmi" name="bmi" value={formData.bmi} readOnly />
                </div>
                <div className="form-group2">
                  <label htmlFor="heart_rate">Heart Rate:</label>
                  <input type="number" id="heart_rate" name="heart_rate" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="respiratory_rate">Respiratory Rate:</label>
                  <input type="number" id="respiratory_rate" name="respiratory_rate" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="oxygen_saturation">Oxygen Saturation:</label>
                  <input type="number" id="oxygen_saturation" name="oxygen_saturation" onChange={handleInputChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group2">
                  <label htmlFor="blood_sugar">Capillary Blood Sugar (using glucometer):</label>
                  <input type="number" id="blood_sugar" name="blood_sugar" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="bp_systolic">Systolic:</label>
                  <input type="number" id="bp_systolic" name="bp_systolic" onChange={handleInputChange} />
                </div>
                <div className="form-group2">
                  <label htmlFor="bp_diastolic">Diastolic:</label>
                  <input type="number" id="bp_diastolic" name="bp_diastolic" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <h2>Complain of (C/O): </h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="chief_complain">Chief Complain:</label>
                <textarea id="chief_complain" name="chief_complain" rows="3" onChange={handleInputChange}></textarea>
              </div>
            </div>
            <h2>Any relevant other findings: </h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="other_findings">Other Findings:</label>
                <textarea id="other_findings" name="other_findings" rows="3" onChange={handleInputChange}></textarea>
              </div>
            </div>
            <h2>Provisional Diagnosis (P/D):</h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="provisional_diagnosis">Provisional Diagnosis:</label>
                <textarea id="provisional_diagnosis" name="provisional_diagnosis" rows="3" onChange={handleInputChange}></textarea>
              </div>
            </div>
            <h2>Tests for Confirmation:</h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="confirmation_tests">Tests:</label>
                <textarea id="confirmation_tests" name="confirmation_tests" rows="3" onChange={handleInputChange}></textarea>
              </div>
            </div>
            <h2>Medications:</h2>
            {formData.medications.map((med, index) => (
              <div key={index} className="form-container">
                <div className="form-row">
                  <div className="form-group2">
                    <label htmlFor={`med-type-${index}`}>Type:</label>
                    <input type="text" id={`med-type-${index}`} name="type" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                  <div className="form-group2">
                    <label htmlFor={`med-name-${index}`}>Name:</label>
                    <input type="text" id={`med-name-${index}`} name="name" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group2">
                    <label htmlFor={`med-dosage-${index}`}>Dosage:</label>
                    <input type="text" id={`med-dosage-${index}`} name="dosage" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                  <div className="form-group2">
                    <label htmlFor={`med-amount-${index}`}>Amount:</label>
                    <input type="text" id={`med-amount-${index}`} name="amount" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group2">
                    <label htmlFor={`med-frequency-${index}`}>Frequency:</label>
                    <input type="text" id={`med-frequency-${index}`} name="frequency" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                  <div className="form-group2">
                    <label htmlFor={`med-time_of_administration-${index}`}>Time of Administration:</label>
                    <input type="text" id={`med-time_of_administration-${index}`} name="time_of_administration" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group2">
                    <label htmlFor={`med-duration-${index}`}>Duration:</label>
                    <input type="text" id={`med-duration-${index}`} name="duration" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                  <div className="form-group2">
                    <label htmlFor={`med-route-${index}`}>Route:</label>
                    <input type="text" id={`med-route-${index}`} name="route" onChange={(e) => handleMedicationChange(index, e)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group2">
                    <label htmlFor={`med-special_instructions-${index}`}>Special Instructions:</label>
                    <textarea id={`med-special_instructions-${index}`} name="special_instructions" rows="3" onChange={(e) => handleMedicationChange(index, e)}></textarea>
                  </div>
                  <div className="form-group2">
                    <label htmlFor={`med-precautions-${index}`}>Precautions:</label>
                    <textarea id={`med-precautions-${index}`} name="precautions" rows="3" onChange={(e) => handleMedicationChange(index, e)}></textarea>
                  </div>
                </div>
              </div>
            ))}
            <button type="button" onClick={addMedicine}>Add Medicine</button>
            <h2>Duration of prescription:</h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="prescription_duration">Duration:</label>
                <input type="text" id="prescription_duration" name="prescription_duration" onChange={handleInputChange} />
              </div>
            </div>
            <h2>Refill Information:</h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="refills">Number of Refills:</label>
                <input type="number" id="refills" name="refills" onChange={handleInputChange} />
              </div>
            </div>
            <h2>Signature:</h2>
            <div className="form-container">
              <div className="form-group2">
                <label htmlFor="signature">Signature:</label>
                <input type="text" id="signature" name="signature" onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="save-prescription-button">Save Prescription</button>
        <Link to="#">
        <button id="btn" type="submit" className="save-prescription-button">check profile</button>
        </Link>
      </form>
     </div>
         
    </div>
  );
}

export default DoctorInterface;

