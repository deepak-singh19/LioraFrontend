import React, { useState, useContext } from "react";

const FormContext = React.createContext();

export const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [calendarData, setCalendarData] = useState([]);

  return (
    <FormContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        location,
        setLocation,
        course,
        setCourse,
        hour,
        setHour,
        date,
        setDate,
        calendarData,
        setCalendarData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
