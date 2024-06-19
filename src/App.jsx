import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Login2 from './screens/Login2';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Team from './components/Github/Team';
import { DoctorsResults } from './components/Home/finddoctor';
import { DoctorDetails } from './components/Home/Doctor';
import { Clinic } from './components/Home/map';
import { DoctorAppointment } from "./components/Home/Appointment";
import { ClinicAppointment } from "./components/Home/AppointmentClinic";
import { PatientProfilePage } from "./components/Home/profile2";
import DoctorInterface from './components/Home/DoctorInterface';
import { TrackAppointment } from './components/Home/trackAppointment';
import ImmunisationSchedule from './components/Home/ImmunisationSchedule';
import DoctorProfileForm from './components/DoctorProfileForm/DoctorProfileForm';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const chatbotRef = useRef(null);
  const [chatbotVisible, setChatbotVisible] = useState(false);

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/57b88fec-ef74-4e86-b4ee-f28ec9aff905/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <Router>
      <div className="App p-0">
        <Header />
        <ErrorBoundary key={window.location.pathname}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createuser" element={<Signup />} />
            <Route path="/logindoctor" element={<Login2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/finddoctor" element={<ProtectedRoute><DoctorsResults /></ProtectedRoute>} />
            <Route path="/map" element={<ProtectedRoute><Clinic /></ProtectedRoute>} />
            <Route path="/AppointmentClinic" element={<ClinicAppointment />} />
            <Route path="/Appointment" element={<DoctorAppointment />} />
            <Route path="/Doctor" element={<DoctorDetails />} />
            <Route path="/doctor-interface" element={<DoctorInterface />} />
            <Route path="/profile2" element={<PatientProfilePage />} />
            <Route path="/trackAppointment" element={<TrackAppointment />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Immunisation" element={<ImmunisationSchedule />} />
            <Route path="/doctorFooter" element={<DoctorProfileForm />} />
            <Route path="/loginuser" element={<Login />} />
          </Routes>

          <div
            id="webchat-container"
            ref={chatbotRef}
            className="webchat-container"
            style={{ display: chatbotVisible ? 'block' : 'none', zIndex: '9999', position: 'fixed', bottom: '20px', right: '20px' }}
          >
            <button
              onClick={toggleChatbot}
              style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', background: 'none', border: 'none' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <Footer />
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
