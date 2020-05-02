import {
  createMonthPlus,
  makeDateId,
  getMonthIncSurr,
  addToCalendar,
} from "../util/createDays";

import { makeTime } from "../util/helpers";

function reducer(state, action) {
  switch (action.type) {
    case "initial_load":
      let today = new Date();
      let month = createMonthPlus(today.getFullYear(), today.getMonth());
      return {
        ...state,
        allDays: month,
        selectedDayId: makeDateId(today),
        selectedMonth: today.getMonth(),
        selectedYear: today.getFullYear(),
        displayedDays: getMonthIncSurr(
          today.getFullYear(),
          today.getMonth(),
          month
        ),
      };
    case "set_current":
      return {
        ...state,
        selectedDayId: action.dateId,
      };
    case "increment_month":
      let nextMonth = state.selectedMonth === 11 ? 0 : state.selectedMonth + 1;
      let nextYear =
        state.selectedMonth === 11
          ? state.selectedYear + 1
          : state.selectedYear;
      let newNextMonth = createMonthPlus(nextYear, nextMonth);
      let newNextCalendar = addToCalendar(state.allDays, newNextMonth);
      return {
        ...state,
        selectedMonth: nextMonth,
        selectedYear: nextYear,
        displayedDays: getMonthIncSurr(nextYear, nextMonth, newNextCalendar),
        allDays: newNextCalendar,
      };
    case "decrement_month":
      let prevMonth = state.selectedMonth === 0 ? 11 : state.selectedMonth - 1;
      let prevYear =
        state.selectedMonth === 0 ? state.selectedYear - 1 : state.selectedYear;
      let newPrevMonth = createMonthPlus(prevYear, prevMonth);
      let newPrevCalendar = addToCalendar(state.allDays, newPrevMonth);
      return {
        ...state,
        selectedMonth: prevMonth,
        selectedYear: prevYear,
        displayedDays: getMonthIncSurr(prevYear, prevMonth, newPrevCalendar),
        allDays: newPrevCalendar,
      };
    case "show_modal":
      return {
        ...state,
        modalVisible: true,
      };
    case "hide_modal":
      return {
        ...state,
        modalVisible: false,
      };
    case "add_event":
      let selectedDay = state.allDays[state.selectedDayId];
      let formattedEvent = {
        ...action.event,
        startTime: makeTime(action.event.startTime),
        endTime: makeTime(action.event.endTime),
      };
      let addedEventDay = {
        ...selectedDay,
        events: [...selectedDay.events, formattedEvent],
      };
      return {
        ...state,
        allDays: { ...state.allDays, [state.selectedDayId]: addedEventDay },
        modalVisible: false,
      };
    default:
      return state;
  }
}

export default reducer;
