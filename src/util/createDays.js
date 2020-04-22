class Day {
  constructor(year, month, day) {
    const dayDate = new Date(year, month, day);
    this.dateId = dateId(dayDate);
    this.dayOfWeek = dayDate.getDay();
    this.day = dayDate.getDate();
    this.month = dayDate.getMonth();
    this.year = dayDate.getFullYear();
    this.events = [];
  }
}

export function createMonthPlus(year, month) {
  let createdMonth = {};
  for (let d = -6; d <= monthLength(year, month) + 7; d++) {
    const newDay = new Day(year, month, d);
    createdMonth[newDay.dateId] = newDay;
  }
  return createdMonth;
}

export function addToCalendar(calendar, month) {
  return { ...month, calendar };
}

export function dateId(date) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export function getMonthIncSurr(year, month, calendarObj) {
  let encMonth = [];
  let monthStart = calendarObj[`${year}-${month}-1`];
  for (let i = 1; i <= 35; i++) {
    let tempDate = new Date(year, month, i - monthStart.dayOfWeek);
    let dateId = `${tempDate.getFullYear()}-${tempDate.getMonth()}-${tempDate.getDate()}`;
    encMonth.push(calendarObj[dateId]);
  }
  return encMonth;
}

function monthLength(year, month) {
  const lastDay = new Date(year, month - 1, 0);
  return lastDay.getDate();
}
