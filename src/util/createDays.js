class Day {
  constructor(year, month, day) {
    const dayDate = new Date(year, month, day);
    this.dateId = makeDateId(dayDate);
    this.dayOfWeek = dayDate.getDay();
    this.day = dayDate.getDate();
    this.month = dayDate.getMonth();
    this.year = dayDate.getFullYear();
    this.events = [];
    this.date = dayDate;
  }
}

export function createMonthPlus(year, month) {
  let createdMonth = {};
  for (let d = -10; d <= monthLength(year, month) + 20; d++) {
    const newDay = new Day(year, month, d);
    createdMonth[newDay.dateId] = newDay;
  }
  return createdMonth;
}

export function addToCalendar(calendar, month) {
  return { ...month, ...calendar };
}

export function makeDateId(date) {
  let currMonth = date.getMonth() + 1;
  return `${date.getFullYear()}-${currMonth < 10 ? "0" : ""}${currMonth}-${
    date.getDate() < 10 ? "0" : ""
  }${date.getDate()}`;
}

export function getMonthIncSurr(year, month, calendarObj) {
  let encMonth = [];
  let monthStart = calendarObj[makeDateId(new Date(year, month, 1))];
  for (let i = 1; i <= 42; i++) {
    let tempDate = new Date(year, month, i - monthStart.dayOfWeek);
    let dateId = makeDateId(tempDate);
    encMonth.push(calendarObj[dateId]);
  }
  return encMonth;
}

function monthLength(year, month) {
  const lastDay = new Date(year, month - 1, 0);
  return lastDay.getDate();
}
