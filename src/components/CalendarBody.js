import React, { useContext } from "react";
import CalendarContext from "../state/context";
import { DAYS } from "../util/constants";
import CalendarDay from "./CalendarDay";
import { dateId } from "../util/createDays";

const CalendarBody = (props) => {
  const { state, dispatch } = useContext(CalendarContext);
  let today = new Date();
  today = dateId(today);
  return (
    <div className="calendar-body">
      <button
        className="nav-button cal-button inactive"
        onClick={() => dispatch({ type: "decrement_month" })}
      >
        ←
      </button>
      <div className="cal_grid">
        {DAYS.map((v) => (
          <button className="cal-day-header cal-button" key={v}>
            {v}
          </button>
        ))}
        {state.displayedDays.map((v) => (
          <CalendarDay
            inactive={v.month !== state.selectedMonth}
            selected={v.dateId === state.selectedDayId}
            {...v}
            today={today === v.dateId}
            key={v.dateId}
          />
        ))}
      </div>
      <button
        className="nav-button cal-button inactive"
        onClick={() => dispatch({ type: "increment_month" })}
      >
        →
      </button>
    </div>
  );
};

export default CalendarBody;
