import React, { useContext } from "react";
import CalendarContext from "../state/context";
import { FULLDAYS, FULLMONTHS } from "../util/constants";
import { twoChars } from "../util/helpers";
import EventsBody from "./EventsBody";
import Tropical from "../images/tropical.jpg";

const EventsComponent = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  let selectedDay = state.allDays[state.selectedDayId];
  return (
    <div className="events-component">
      <button className="sign-in-button">sign in</button>
      <div className="day-container">
        <div className="day-header">
          <div className="day-of-week-header">
            {FULLDAYS[selectedDay?.dayOfWeek]}
          </div>
          <div className="date-header">
            {FULLMONTHS[selectedDay?.month]} {twoChars(selectedDay?.day)}
          </div>
        </div>
        <EventsBody {...selectedDay} />
        <button
          className="add_button"
          onClick={() => dispatch({ type: "show_modal" })}
        >
          +
        </button>
        <img src={Tropical} alt="Tropical Island" />
      </div>
    </div>
  );
};

export default EventsComponent;
