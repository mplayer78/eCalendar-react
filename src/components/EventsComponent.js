import React, { useContext } from "react";
import CalendarContext from "../state/context";
import { FULLDAYS, FULLMONTHS } from "../util/constants";
import { twoChars } from "../util/helpers";
import EventsBody from "./EventsBody";

const EventsComponent = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  let selectedDay = state.allDays[state.selectedDayId];
  return (
    <div className="events-component">
      <button>sign in</button>
      <div className="day-container">
        <div className="day-header">
          <div className="day-of-week-header">
            {FULLDAYS[selectedDay?.dayOfWeek]}
          </div>
          <div className="date-header">
            {FULLMONTHS[selectedDay?.month]} {twoChars(selectedDay?.day)}
          </div>
          <EventsBody {...selectedDay} />
          <button onClick={() => dispatch({ type: "show_modal" })}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;
