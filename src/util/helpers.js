export function twoChars(number) {
  if (number === 0 || number) {
    return number < 10 ? "0" + number.toString() : "" + number.toString();
  }
}

// takes either a string, float or integer & returns a time string as "HH:MM"
export function makeTimeString(time) {
  console.log("twoChars", twoChars(0));
  let timeFloat = parseFloat(time);
  return `${twoChars(Math.floor(timeFloat))}:${twoChars((timeFloat % 1) * 60)}`;
}

// takes a time string starting with a number then some sort of divider and returns a float time representation
export function makeTime(timeString) {
  let [_, hours, minutes] = /^(\d*)\W*(\d*)/.exec("14.00");
  return parseInt(hours) + parseInt(minutes) / 60;
}
