// import React, { useState, useEffect } from 'react';

// function DoctorList() {
//   const [doctors, setDoctors] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetch('/api/doctors')
//       .then(response => response.json())
//       .then(data => setDoctors(data));
//   }, []);

//   const filteredDoctors = doctors.filter(doctor =>
//     doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const submitReview = (doctorId) => {
//     // This function would handle submitting a review for the doctor with the given ID
//     console.log(`Submitting review for doctor with ID ${doctorId}`);
//   };

//   return (
//     <div>
//       <h2>Doctors</h2>
//       <input
//         type="text"
//         placeholder="Search doctors..."
//         value={searchQuery}
//         onChange={e => setSearchQuery(e.target.value)}
//       />
//       <ul>
//         {filteredDoctors.map(doctor => (
//           <li key={doctor.id}>
//             <div>
//               <img src={doctor.image} alt={doctor.name} style={{ width: '100px', height: '100px' }} />
//               <h3>{doctor.name}</h3>
//               <p>{doctor.reviews} reviews</p>
//               <button onClick={() => submitReview(doctor.id)}>Submit Review</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



// function LocationList() {
//     const [locations, setLocations] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
  
//     useEffect(() => {
//       fetch('/api/locations')
//         .then(response => response.json())
//         .then(data => setLocations(data));
//     }, []);
  
//     const filteredLocations = locations.filter(location =>
//       location.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
  
//     return (
//       <div>
//         <h2>Locations</h2>
//         <input
//           type="text"
//           placeholder="Search locations..."
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//         />
//         <ul>
//           {filteredLocations.map(location => (
//             <li key={location.id}>{location.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// // LocationList remains unchanged for now

// export { DoctorList, LocationList };
import React from 'react';
import { FindDoctors} from './fg.jsx'; // Import DoctorList and LocationList components

function DoctorsResults() {
  return (
    <div className="container1">
      <FindDoctors />
      {/* <LocationList /> */}
    </div>
  );
}

export { DoctorsResults }; // Wrap the exported component in curly braces






