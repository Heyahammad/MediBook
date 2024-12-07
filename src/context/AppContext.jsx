import React, { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // Initial state for the appointments
  const [appointments, setAppointments] = useState([]);

  // Function to add a new appointment
  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  const currencySymbol = "tk";

  // Provide the context value to child components
  const value = {
    doctors,
    appointments,
    currencySymbol,
    addAppointment,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
