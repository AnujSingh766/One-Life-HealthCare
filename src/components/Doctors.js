import React from 'react';
import '../styles/Doctors.css';
import doctor1 from '../assets/images/doctors/doctors-1.jpg'; 
import doctor2 from '../assets/images/doctors/doctors-2.jpg';
import doctor3 from '../assets/images/doctors/doctors-3.jpg';
import doctor4 from '../assets/images/doctors/doctors-4.jpg';

const Doctors = () => (
  <section className="doctors-section">
    <h2>Our Doctors</h2>
    <div className="doctor-card">
      <img className="doctor-image" src={doctor1} alt="Doctor 1" />
      <h3 className="doctor-name">Dr. John Doe</h3>
      <p className="doctor-title">Cardiologist</p>
    </div>
    <div className="doctor-card">
      <img className="doctor-image" src={doctor2} alt="Doctor 2" />
      <h3 className="doctor-name">Dr. Jane Smith</h3>
      <p className="doctor-title">Neurologist</p>
    </div>
    <div className="doctor-card">
      <img className="doctor-image" src={doctor3} alt="Doctor 3" />
      <h3 className="doctor-name">Dr. Akshay Bafna</h3>
      <p className="doctor-title"> Orthologist</p>
    </div>
    <div className="doctor-card">
      <img className="doctor-image" src={doctor4} alt="Doctor 4" />
      <h3 className="doctor-name">Dr. Nazali</h3>
      <p className="doctor-title">Nurse Practitioner</p>
    </div>
  </section>
);

export default Doctors;
