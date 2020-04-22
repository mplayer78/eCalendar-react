import React, { useContext, useEffect } from "react";
import CalendarContext from "../state/context";
import MonthHeader from "./MonthHeader";
import CalendarBody from "./CalendarBody";

const CalendarComponent = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  useEffect(() => {
    dispatch({ type: "initial_load" });
  }, [dispatch]);
  return (
    <div className="calendar-component">
      <div className="header-container">
        <h1>eCalendar</h1>
        <h1>{state.selectedYear}</h1>
      </div>
      <div className="calendar-container">
        <MonthHeader />
        <CalendarBody />
      </div>
    </div>
  );
};

export default CalendarComponent;
