
import React, { useState } from 'react';
import './clinicApp.css';
import { Link } from 'react-router-dom';
import { Map } from "./clinic.jsx";
import axios from 'axios';
// Import doctor images
import doctorImg1 from "./images/d.jpg";
import doctorImg2 from "./images/d1.jpg";
import doctorImg3 from "./images/d2.jpg"; ``
import doctorImg4 from "./images/d3.jpg";
import doctorImg5 from "./images/d4.jpg";
import doctorImg6 from "./images/d5.jpg";
import doctorImg7 from "./images/d6.jpg";
import doctorImg8 from "./images/d7.jpg";
import doctorImg9 from "./images/d.jpg"

import img1 from "./images/img1.avif";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.avif";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.jpg";

import gallary1 from "./images/gallary1.jpg";
import gallary2 from "./images/gallary2.jpg";
import gallary3 from "./images/gallary3.jpg";
function ClinicAppointment() {
  // const [selectedClinic, setSelectedClinic] = useState(null);
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [patientDetails, setPatientDetails] = useState({
    name: '',
    fathersName: '',
    mothersName: '',
    dateOfBirth: '',
    age: '',
    gender: '',
    address: ''
  });
  const clinics = [
    {
      id: 1,
      name: "Main Branch",
      location: "location:Dharmatala,Kolkata",
      image: img1,
      clinicTime: "clinicTime:9:00 AM - 5:00 PM",

      Holiday: "Holiday:Sunday",
      mode: "mode:online-booking,SMS",
      about: "Vibrant Care is a leading healthcare provider in the heart of Patna. Our clinic is equipped with state-of-the-art facilities and staffed by a team of experienced medical professionals dedicated to providing personalized care to our patients. Whether you're in need of routine check-ups or specialized treatments, we are committed to meeting your healthcare needs with compassion and expertise.",
      doctors: [
        {
          id: 1,
          name: "name:Dr. Arita Khan",
          specialty: "specialty:MBBS , MD (Pediatrics )",
          image: doctorImg1,
          clinicLocation: "Clinic location:Dharmatala,Kolkata",
          consultantFees: "ConsultantFees:500",
          clinicTime: "ClinicTime:9:00 AM - 5:00 PM",
          availableSlots: ["5:00 AM-7:00 AM", "11:00 AM-1:00 PM", "4:00 PM-6:00 PM"],
          about: "Dr. John Doe is a highly experienced cardiologist specializing in the diagnosis and treatment of heart conditions. With a compassionate approach and extensive expertise, Dr. Doe is dedicated to providing the highest quality care to his patients."
        },
        {
          id: 2,
          name: "name:Dr. Dipesh Barman",
          specialty: "speciality:MBBS , MD (Pediatrics )",
          image: doctorImg2,
          clinicLocation: "Clinic location:456 Elm St, Los Angeles, CA",
          consultantFees: "ConsultantFees:$180",
          clinicTime: "ClinicTime:8:00 AM - 4:00 PM",
          availableSlots: ["9:00 AM-11:00 AM", "10:00 AM-12:30 PM", "7:00 PM-9:00 PM"],
          about: "Dr. Jane Smith is a caring and dedicated pediatrician committed to providing comprehensive healthcare services to children of all ages. With a focus on preventive care and family-centered treatment, Dr. Smith strives to create a nurturing and supportive environment for her young patients."
        },
        {
          id: 3,
          name: "name:Dr. Riya berma",
          specialty: "speciality:Dermatologist",
          image: doctorImg3,
          clinicLocation: "clinicLocation:789 Oak St, Chicago, IL",
          consultantFees: "ConsultantFees:$250",
          clinicTime: "ClinicTime:10:00 AM - 6:00 PM",
          availableSlots: ["11:00 AM-1:00 PM", "12:00 PM-2:00 PM", "3:00 PM-5:00 PM"],
          about: "Dr. Michael Johnson is a board-certified dermatologist specializing in medical and cosmetic dermatology. With advanced training and a passion for skincare, Dr. Johnson provides personalized treatment plans to address a wide range of dermatological concerns."
        },
      ]
    },
    {
      id: 2,
      name: "infant branch",
      location: "Location:Sunset Blvd, Los Angeles, CA",
      image: img2,
      clinicTime: "ClinicTime:8:00 AM - 6:00 PM",

      Holiday: "Holiday:Saturday",
      mode: "mode:online-booking,Phone",
      about: "Sunshine Clinic is dedicated to providing comprehensive healthcare services to individuals and families in Los Angeles. Our team of skilled medical professionals offers personalized care in a warm and welcoming environment. From routine check-ups to specialized treatments, we are committed to helping our patients achieve optimal health and wellness.",
      doctors: [
        {
          id: 4,
          name: "Dr. Emily Brown",
          specialty: "Oncologist",
          image: doctorImg4,
          clinicLocation: "101 Pine St, San Francisco, CA",
          consultantFees: "$300",
          clinicTime: "8:30 AM - 4:30 PM",
          availableSlots: ["9:30 AM-11:30 PM", "11:30 AM-1:30 PM", "2:30 PM-4:30 PM"],
          about: "Dr. Emily Brown is a dedicated oncologist specializing in the diagnosis and treatment of cancer. With a focus on patient-centered care and innovative therapies, Dr. Brown is committed to helping patients and their families navigate their cancer journey with compassion and support."
        },
        {
          id: 5,
          name: "Dr. Alex Lee",
          specialty: "Orthopedic Surgeon",
          image: doctorImg5,
          clinicLocation: "246 Maple St, Boston, MA",
          consultantFees: "$280",
          clinicTime: "9:30 AM - 5:30 PM",
          availableSlots: ["10:30 AM-12:30PM", "12:30 PM-2:30 PM", "3:30 PM-5:30PM"],
          about: "Dr. Alex Lee is a skilled orthopedic surgeon specializing in the treatment of musculoskeletal injuries and disorders. With expertise in both surgical and non-surgical interventions, Dr. Lee provides comprehensive care to help patients regain mobility and improve their quality of life."
        },
        {
          id: 6,
          name: "Dr. Sarah Wilson",
          specialty: "Neurologist",
          image: doctorImg6,
          clinicLocation: "369 Cedar St, Seattle, WA",
          consultantFees: "$270",
          clinicTime: "9:00 AM - 5:00 PM",
          availableSlots: ["10:00 AM-11:00AM", "3:00 PM-5:00 PM", "7:00 PM-9:00 PM"],
          about: "Dr. Sarah Wilson is a compassionate neurologist specializing in the diagnosis and treatment of neurological disorders. With expertise in conditions such as epilepsy, stroke, and multiple sclerosis, Dr. Wilson is dedicated to providing personalized care to improve the lives of her patients."
        }
      ]
    },
    {
      id: 3,
      name: "Ayushman-yogna",
      location: "Location:Springfield Ave, Chicago, IL",
      image: img3,
      clinicTime: "ClinicTime:10:00 AM - 7:00 PM",

      Holiday: "Holiday:Monday",
      mode: "mode:online-booking,Email",
      about: "Blossom Medical Center is committed to delivering high-quality healthcare services to the community of Chicago. Our modern facility is equipped with advanced technology, and our team of experienced physicians is dedicated to providing personalized care to each patient. Whether you need a routine check-up or specialized treatment, we are here to address your healthcare needs with compassion and expertise.",
      doctors: [
        {
          id: 6,
          name: "name:Dr. Sarah Wilson",
          specialty: "specialty:Neurologist",
          image: doctorImg7,
          clinicLocation: "Clinic location:369 Cedar St, Seattle, WA",
          consultantFees: "ConsultantFees:$270",
          clinicTime: "ClinicTime:9:00 AM - 5:00 PM",
          availableSlots: ["10:00 AM-11:00AM", "3:00 PM-5:00 PM", "7:00 PM-9:00 PM"],
          about: "Dr. Sarah Wilson is a compassionate neurologist specializing in the diagnosis and treatment of neurological disorders. With expertise in conditions such as epilepsy, stroke, and multiple sclerosis, Dr. Wilson is dedicated to providing personalized care to improve the lives of her patients."
        },
        {
          id: 7,
          name: "name:Dr. Emily Brown",
          specialty: "specialty:Oncologist",
          image: doctorImg8,
          clinicLocation: "Clinic location:101 Pine St, San Francisco, CA",
          consultantFees: "ConsultantFees:$200",
          clinicTime: "ClinicTime:8:30 AM - 4:30 PM",
          availableSlots: ["9:30 AM-11:30 AM", "11:30 AM-1:30 PM", "2:30 PM-4:30 PM"],
          about: "Dr. Emily Brown is a dedicated oncologist specializing in the diagnosis and treatment of cancer. With a focus on patient-centered care and innovative therapies, Dr. Brown is committed to helping patients and their families navigate their cancer journey with compassion and support."
        },
        {
          id: 8,
          name: "name:Dr. Alex Lee",
          specialty: "specialty:Orthopedic Surgeon",
          image: doctorImg4,
          clinicLocation: "Clinic location:246 Maple St, Boston, MA",
          consultantFees: "ConsultantFees:$170",
          clinicTime: "ClinicTime:9:30 AM - 5:30 PM",
          availableSlots: ["10:30 AM-12:30PM", "12:30 PM-2:30 PM", "3:30 PM-5:30PM"],
          about: "Dr. Alex Lee is a skilled orthopedic surgeon specializing in the treatment of musculoskeletal injuries and disorders. With expertise in both surgical and non-surgical interventions, Dr. Lee provides comprehensive care to help patients regain mobility and improve their quality of life."
        }
      ]
    },
    {
      id: 4,
      name: "Female welfare branch",
      location: "Location:Evergreen Terrace, Springfield, IL",
      image: img4,
      clinicTime: "ClinicTime:8:00 AM - 6:00 PM",

      Holiday: "Holiday:Wednesday",
      mode: "mode:online-booking,Phone",
      about: "Evergreen Wellness Center is dedicated to promoting holistic health and wellness in the Springfield community. Our integrative approach combines conventional medicine with complementary therapies to address the root causes of health issues. Our team of experienced practitioners offers personalized care to help individuals achieve optimal health and vitality.",
      doctors: [
        {
          id: 9,
          name: "name:Dr. Julia Adams",
          specialty: "specialty:Family Physician",
          image: doctorImg8,
          clinicLocation: "Clinic location:789 Oak St, Chicago, IL",
          consultantFees: "ConsultantFees:$200",
          clinicTime: "ClinicTime:9:00 AM - 5:00 PM",
          availableSlots: ["9:00 AM-11:00 AM", "1:00 PM-3:00 PM", "4:00 PM-6:00 PM"],
          about: "Dr. Julia Adams is a dedicated family physician committed to providing comprehensive healthcare services to patients of all ages. With a focus on preventive care and patient education, Dr. Adams strives to empower individuals to take control of their health and well-being."
        },
        {
          id: 10,
          name: "name:Dr. Michael Johnson",
          specialty: "specialty:Dermatologist",
          image: doctorImg9,
          clinicLocation: "Clinic location:123 Elm St, Springfield, IL",
          consultantFees: "ConsultantFees:$250",
          clinicTime: "ClinicTime:10:00 AM - 6:00 PM",
          availableSlots: ["10:00 AM-12:00 PM", "2:00 PM-4:00 PM", "5:00 PM-7:00 PM"],
          about: "Dr. Michael Johnson is a board-certified dermatologist specializing in medical and cosmetic dermatology. With advanced training and a passion for skincare, Dr. Johnson provides personalized treatment plans to address a wide range of dermatological concerns."
        },
        {
          id: 11,
          name: "Dr. Alex Lee",
          specialty: "Orthopedic Surgeon",
          image: doctorImg5,
          clinicLocation: "246 Maple St, Boston, MA",
          consultantFees: "$280",
          clinicTime: "9:30 AM - 5:30 PM",
          availableSlots: ["10:30 AM-12:30PM", "12:30 PM-2:30 PM", "3:30 PM-5:30PM"],
          about: "Dr. Alex Lee is a skilled orthopedic surgeon specializing in the treatment of musculoskeletal injuries and disorders. With expertise in both surgical and non-surgical interventions, Dr. Lee provides comprehensive care to help patients regain mobility and improve their quality of life."
        }
      ]
    },
    {
      id: 5,
      name: "Rainbow Pediatrics",
      location: "Location:Sunset Blvd, Los Angeles, CA",
      image: img5,
      clinicTime: "ClinicTime:9:00 AM - 5:00 PM",

      Holiday: "Holiday:Thursday",
      mode: "mode:online-booking,SMS",
      about: "Rainbow Pediatrics is dedicated to providing compassionate and comprehensive healthcare services to children and adolescents in Los Angeles. Our team of experienced pediatricians offers a range of services from well-child check-ups to specialized care for acute and chronic conditions. We are committed to ensuring the health and well-being of every child who walks through our doors.",
      doctors: [
        {
        
          id: 11,
          name: "name:Dr. Lisa Garcia",
          specialty: "specialty:Pediatrician",
          image: doctorImg8,
          clinicLocation: "Clinic location:456 Elm St, Los Angeles, CA",
          consultantFees: "ConsultantFees:$180",
          clinicTime: "ClinicTime:8:00 AM - 4:00 PM",
          availableSlots: ["8:30 AM-10:30 AM", "11:00 AM-1:00 PM", "2:00 PM-4:00 PM"],
          about: "Dr. Lisa Garcia is a caring and dedicated pediatrician committed to providing comprehensive healthcare services to children of all ages. With a focus on preventive care and family-centered treatment, Dr. Garcia strives to create a nurturing and supportive environment for her young patients."
        },
        {
          id: 12,
          name: "name:Dr. Kevin Patel",
          specialty: "specialty:Pediatric Surgeon",
          image: doctorImg1,
          clinicLocation: "Clinic location:789 Oak St, Chicago, IL",
          consultantFees: "ConsultantFees:$190",
          clinicTime: "ClinicTime:9:00 AM - 5:00 PM",
          availableSlots: ["9:30 AM-11:30 AM", "1:00 PM-3:00 PM", "4:30 PM-6:30 PM"],
          about: "Dr. Kevin Patel is a skilled pediatric surgeon specializing in surgical procedures for children and adolescents. With expertise in a wide range of pediatric conditions, Dr. Patel is dedicated to providing compassionate care and achieving the best possible outcomes for his young patients."
        }
      ]
    },
    {
      id: 6,
      name: "Green Valley Dental Clinic",
      location: "Location:Green Valley Rd, San Francisco, CA",
      image: img6,
      clinicTime: "ClinicTime:10:00 AM - 8:00 PM",

      Holiday: "Holiday:Sunday",
      mode: "mode:online-booking,Phone",
      about: "Green Valley Dental Clinic is committed to providing high-quality dental care to patients of all ages in San Francisco. Our experienced team of dentists and hygienists offers a full range of dental services, including routine cleanings, cosmetic procedures, and restorative treatments. ",
      doctors: [{
        id: 13,
        name: "name:Dr. Sarah Evans",
        specialty: "specialty:Dentist",
        image: doctorImg7,
        clinicLocation: "Clinic location:789 Oak St, San Francisco, CA",
        consultantFees: "ConsultantFees:$180",
        clinicTime: "ClinicTime:10:00 AM - 6:00 PM",
        availableSlots: ["10:00 AM-12:00 PM", "1:00 PM-3:00 PM", "4:00 PM-6:00 PM"],
        about: "Dr. Sarah Evans is a skilled and compassionate dentist dedicated to providing exceptional dental care to her patients. With a focus on preventive dentistry and patient education, Dr. Evans helps individuals achieve and maintain optimal oral health. She believes in building long-term relationships with her patients based on trust, respect, and personalized care."
      },
      {
        id: 14,
        name: "name:Dr. Mark Thompson",
        specialty: "specialty:Orthodontist",
        image: doctorImg9,
        clinicLocation: "Clinic location:456 Elm St, San Francisco, CA",
        consultantFees: "ConsultantFees:$250",
        clinicTime: "ClinicTime:9:00 AM - 5:00 PM",
        availableSlots: ["9:00 AM-11:00 AM", "12:00 PM-2:00 PM", "3:00 PM-5:00 PM"],
        about: "Dr. Mark Thompson is a highly skilled orthodontist specializing in braces and Invisalign treatments. With advanced training and a commitment to staying current with the latest advancements in orthodontics, Dr. Thompson provides customized treatment plans to address each patient's unique needs and goals. He is dedicated to helping patients achieve straighter, healthier smiles and improved confidence."
      }
      ]
    }

  ];
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientDetails({ ...patientDetails, [name]: value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Generate a random appointment number
      const appointmentNumber = Math.floor(Math.random() * 1000000);

      // Combine patient details with appointment number
      const dataToSubmit = {
        ...patientDetails,
        appointmentNumber: appointmentNumber
      };
      console.log(dataToSubmit);
      // Send a POST request to the backend endpoint with patientDetails
      // await axios.post('http://localhost:5001/api/patients', dataToSubmit);
      // alert(`Your appointment number is ${appointmentNumber}.`);

      // Reset the form fields after submission
      setPatientDetails({
        name: '',
        fathersName: '',
        mothersName: '',
        dateOfBirth: '',
        age: '',
        gender: '',
        address: ''
      });
    } catch (error) {
      console.error('Error submitting patient details:', error);
    }
  };



  // const handleClinicSelect = (clinic) => {
  //   setSelectedClinic(clinic);
  //   setSelectedDoctor(null);
  // };

  // const handleDoctorSelection = (doctor) => {
  //   setSelectedDoctor(doctor);
  // // Reset selected slot when doctor changes
  // };

  // // Separate doctors into two groups
  // const topDoctors = selectedClinic ? selectedClinic.doctors.slice(0, 3) : [];
  // const bottomDoctors = selectedClinic ? selectedClinic.doctors.slice(3) : [];

  return (
    <div className="clinic-appointment-container">

      <div className='middle-section'>
        <h1 className='hd'>Clinic Information</h1>
        <div className="clinic-info">

          <>
            <h2 id='a' className='clinic-name'>Paediprime</h2>
            <img src={img1} alt={img1.name} className='img' />
            <p className=''><span>Location:</span>Dharmatala,Kolkata</p>
            <p><span>Clinic Time:</span>9:00 AM - 5:00 PM</p>
            
            <p><span>Mode:</span>online-booking,SMS</p>
            <h2 id="c" className='clinic-name'>About Clinic</h2>
            <p>Paediprime Dharmatala is a leading healthcare provider in the heart of Kolkata. Our clinic is equipped with state-of-the-art facilities and staffed by a team of experienced medical professionals dedicated to providing personalized care to our patients. Whether you're in need of routine check-ups or specialized treatments, we are committed to meeting your healthcare needs with compassion and expertise.</p>
          </>
        </div>
        <h1 id="a" className='hd'>Gallary</h1>

        <div className='images'>
          <img src={gallary1} alt="fdcvcv" id="i"></img>
          <img src={gallary2} alt="fdcvcv" id="i"></img>
          <img src={gallary3} alt="fdcvcv" id="i"></img>
        </div>
        <h1 id="bn" className="hd">Map</h1>
        <div className="map-container">
          <Map />
        </div>
        
      </div>
      <div className="buttom-section">
        <h1 id="b" className='hd'>Doctor's List</h1>
        <div className="doctor-list">
          <div className="doctor-card">
            <div className='doctor-c'>
              <div className="doctor-image">
                <img src={doctorImg1} alt="bhbhb" />
              </div>
              <div className="doctor-details-appoint">
                <h3>Name: Dr. Arita Khan</h3>
                <p className='speciality'><span>Specialty:</span> MBBS , MD (Pediatrics )</p>
                <p className='location'><span>Location:</span>123 Main Street, Dharmatala,Kolkata</p>
                <p className='slots'><span>Available Slots:</span>["9:00 AM-11:00 AM", "10:00 AM-12:30 PM", "7:00 PM-9:00 PM"]</p>
                <p className='fees'><span>ConsultantFees:</span>500</p>
                <Link to="/appointment" className="book-appointment-link">
                  <button id="button">Book Appointment</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="doctor-card">
            <div className='doctor-c'>
              <div className="doctor-image">
                <img src={doctorImg4} alt="bhbhb" />
              </div>
              <div className="doctor-details-appoint">
                <h3>Name:Dr. Dipesh Barman</h3>
                <p className='speciality'><span>Specialty:</span>MBBS , MD (Pediatrics )</p>
                <p className='location'><span>Location:</span>456 Elm Street, Kolkata</p>
                <p className='slots'><span>Available Slots:</span>["8:00 AM-10:00 AM", "11:00 AM-1:00 PM", "3:00 PM-5:00 PM"]</p>
                <p className='fees'><span>ConsultantFees:</span>550</p>
                <Link to="/appointment" className="book-appointment-link">
                  <button id="button" >Book Appointment</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="doctor-card">
            <div className='doctor-c'>
              <div className="doctor-image">
                <img src={doctorImg3} alt="bhbhb" />
              </div>
              <div className="doctor-details-appoint">
                <h3>Name:Dr. Ananya Singh</h3>
                <p className='speciality'><span>Specialty:</span>Pediatrics MD</p>
                <p className='location'><span>Location:</span>Arambagh</p>
                <p className='slots'><span>Available Slots:</span>[ "1:00 PM-3:00 PM", "4:00 PM-6:00 PM"]</p>
                <p className='fees'><span>ConsultantFees:</span>500</p>
                <Link to="/appointment" className="book-appointment-link">
                  <button id="button">Book Appointment</button>
                </Link>
              </div>
            </div>
          </div>
        </div> 


        
        
        
      </div>
    </div>
  );
}
export { ClinicAppointment };


