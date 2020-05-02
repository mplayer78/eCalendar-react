import React, { useContext } from "react";
import CalendarContext from "../state/context";

const CalendarDay = (props) => {
  const { dispatch } = useContext(CalendarContext);
  const { inactive, selected, today, dayInfo } = props;
  const calClass = `cal_day cal-button ${inactive ? "inactive" : ""} ${
    selected ? "current_focus_day" : ""
  } ${today ? "cal-today" : ""} 
  ${dayInfo.events.length > 0 ? "events-on" : ""}`;
  return (
    <button
      className={calClass}
      onClick={() => dispatch({ type: "set_current", dateId: props.dateId })}
    >
      {props.day}
    </button>
  );
};

export default CalendarDay;
