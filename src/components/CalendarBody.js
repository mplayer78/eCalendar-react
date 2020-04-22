import React, { useContext } from "react";
import CalendarContext from "../state/context";
import { DAYS } from "../util/constants";

const CalendarBody = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  return (
    <div className="calendar-body">
      <button onClick={() => dispatch({ type: "decrement_month" })}>
        back
      </button>
      <div className="cal-grid">
        {DAYS.map((v) => (
          <button key={v}>{v}</button>
        ))}
        {state.displayedDays.map((v) => (
          <button
            key={v.dateId}
            onClick={() => dispatch({ type: "set_current", dateId: v.dateId })}
          >
            {v.day}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "increment_month" })}>
        forward
      </button>
    </div>
  );
};

export default CalendarBody;
