import React, { useContext } from "react";
import CalendarContext from "../state/context";
import { MONTHS } from "../util/constants";

const MonthHeader = (props) => {
  const { state } = useContext(CalendarContext);
  return (
    <div className="month-header">
      <h1 className="month-display inactive">
        {MONTHS[state.selectedMonth === 0 ? 11 : state.selectedMonth - 1]}
      </h1>
      <h1 className="month-display active">{MONTHS[state.selectedMonth]}</h1>
      <h1 className="month-display inactive">
        {MONTHS[state.selectedMonth === 11 ? 0 : state.selectedMonth + 1]}
      </h1>
    </div>
  );
};

export default MonthHeader;
