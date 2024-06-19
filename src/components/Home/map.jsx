
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './clinic.css'; // Import the CSS file for clinic stylings
import { Map } from './clinic.jsx';
import axios from 'axios';


import img1 from "./images/img1.avif";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.avif";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.jpg";

// Sample clinic data
const clinics = [
  {
    name: "Paediprime",
    location: "Dharmatala,Kolkata",
    image: img1
  },
  {
    name: "Paediprime",
    location: "Basantapur More, Arambagh",
    image: img2
  },
  {
    name: "Paediprime",
    location: "Saltlake,Kolkata",
    image: img3
  },
  {
    name: "Paediprime",
    location: "Park Street, Kolkata",
    image: img4
  },
  {
    name: "Paediprime",
    location: "Buddha park, Kalyani",
    image: img5
  },
  {
    name: "Paediprime",
    location: "Goswami Rd,Durgapur",
    image: img6
  }
];

function Clinic() {
  const [filteredClinics, setFilteredClinics] = useState(clinics);
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter clinics based on the search query
    const location = query.toLowerCase();
    const filtered = clinics.filter(clinic =>
      clinic.location.toLowerCase().includes(location)
    );
    setFilteredClinics(filtered);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Filter clinics based on the updated search query
    const location = e.target.value.toLowerCase();
    const filtered = clinics.filter(clinic =>
      clinic.location.toLowerCase().includes(location)
    );
    setFilteredClinics(filtered);
  };

  return (
    <div className="clinic-container">
      <div className="left-section">
        <h1 className="hd">Find Clinic</h1>
        <div className="search-container">
          {/* Search bar */}
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter location"
              value={query}
              onChange={handleInputChange}
              className="search-input" 
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      {/* <h1 className="hd">Search Result</h1> */}
      <div className="right-section">
      <h1 className="hd">Search Result</h1>
        <div className="additional-images-container" id="results">
       
          {filteredClinics.length > 0 ? (
            filteredClinics.map((clinic, index) => (
              <Link to={`/AppointmentClinic`} key={index} className="clinic-link">
                <div className="clinic">
                  <img src={clinic.image} alt={clinic.name} />
                  <h2>{clinic.name}</h2>
                  <p className="location">{clinic.location}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No clinics found for the given location.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export { Clinic };
