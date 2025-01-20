
import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import {appointmentData} from "../helper/data"

const Home = () => {
    const [appointment, setAppointment] =useState(appointmentData)
  return (
    <main className="main text-center m-2">
      <h1>REACT HOSPITAL</h1>
      <Doctors appointment={appointment} setAppointment={setAppointment}/>
      <AppointmentList appointment={appointment} setAppointment={setAppointment} />
      
    </main>
  );
};

export default Home;
