

import React, { useState } from 'react';
import './fg.css'; // Import the CSS file for doctor styling
import { Map } from './clinic.jsx'; 
// Import the Map component
import { Link } from 'react-router-dom';
import doctorImg1 from "./images/d.jpg";
import doctorImg2 from "./images/d1.jpg";
import doctorImg3 from "./images/d2.jpg";
import doctorImg4 from "./images/d3.jpg";
import doctorImg5 from "./images/d4.jpg";
import doctorImg6 from "./images/d5.jpg";
import doctorImg7 from "./images/d6.jpg";
import doctorImg8 from "./images/d7.jpg";

// Sample doctor data
const doctors = [
  {
    name: "Dr. Aritra Khan",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Kolkata",
    image: doctorImg1
  },
  {
    name: "Dr. Sudipta Biswas",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Kolkata",
    image: doctorImg2
  },
  {
    name: "Dr. Sunita Biswas",
    specialty: "MBBS,MD(Pediatrics)",
    location: "Arambagh",
    image: doctorImg3
  },
  {
    name: "Dr. Dipesh Barman",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Kolkata",
    image: doctorImg4
  },
  {
    name: "Dr. Soumya Pandit",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Kolkata",
    image: doctorImg5
  },
  {
    name: "Dr. Ananya Singh",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Durgapur",
    image: doctorImg6
  },
  {
    name: "Dr. Srijan Ghosh",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Bankura",
    image: doctorImg7
  },
  {
    name: "Dr. Sneha Barui",
    specialty: "MBBS , MD (Pediatrics )",
    location: "Kolkata",
    image: doctorImg8
  }
];

function FindDoctors() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [queryDoctor, setQueryDoctor] = useState('');
  const [queryLocation, setQueryLocation] = useState('');

  const handleSubmitDoctor = (e) => {
    e.preventDefault();
    // Filter doctors based on the search query
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(queryDoctor.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    // Filter doctors based on the location query
    const filtered = doctors.filter(doctor =>
      doctor.location.toLowerCase().includes(queryLocation.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const handleClear = () => {
    setQueryDoctor('');
    setQueryLocation('');
    setFilteredDoctors(doctors);
  };

  return (
    <div className="doctors-container">
      <div className="left-section">
        <h1 className="hd">Find Doctors</h1>
        <div className="search-container">
          {/* Doctor Search bar */}
          <form className="search-form" onSubmit={handleSubmitDoctor}>
            <input
              type="text"
              placeholder="Enter doctor name"
              value={queryDoctor}
              onChange={(e) => setQueryDoctor(e.target.value)}
              className="search-input" 
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          {/* Location Search bar */}
          <form className="search-form" onSubmit={handleSubmitLocation}>
            <input
              type="text"
              placeholder="Enter location"
              value={queryLocation}
              onChange={(e) => setQueryLocation(e.target.value)}
              className="search-input" 
            />
            <button type="submit" className="search-button">Search</button>
          </form>
          <button type="button" className="clear-button" onClick={handleClear}>Clear</button>
        </div>
        <div className="map-container">
          <Map />
        </div>
      </div>
      <div className="right-section">
        <div className="additional-doctors-container">
          <h2 className="hd">Search result</h2>
          <div className="row">
            
            {filteredDoctors.map((doctor, index) => (
              <div className="doctor-info" key={index}>
                <Link to="/Doctor">
                  <img src={doctor.image} alt={`Doctor Image ${index}`} />
                </Link>
                <div className="doctor-details">
                  <h2 className="doctor-name">
                    <Link to="/Doctor">{doctor.name}</Link>
                  </h2>
                  <p className="doctor-specialty"> <h2>Specialty: </h2>{doctor.specialty}</p>
                  <p className="doctor-location"><h2>Location: </h2> {doctor.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { FindDoctors };
