export function twoChars(number) {
  if (number === 0 || number) {
    return number < 10
      ? "0" + Math.floor(number).toString()
      : "" + Math.floor(number).toString();
  }
  return "00";
}

// takes either a string, float or integer & returns a time string as "HH:MM"
export function makeTimeString(time) {
  let timeFloat = parseFloat(time);
  return `${twoChars(Math.floor(timeFloat))}:${twoChars((timeFloat % 1) * 60)}`;
}

// takes a time string starting with a number then some sort of divider and returns a float time representation
export function makeTime(timeString) {
  let [_, hours, minutes] = /^(\d*)\W*(\d*)/.exec(timeString);
  console.log("hours,minutes", parseInt(hours), parseInt(minutes));
  console.log(
    "parseInt(hours) + parseInt(minutes || 0) / 60;",
    parseInt(hours) + parseInt(minutes || 0) / 60
  );
  return parseInt(hours) + parseInt(minutes || 0) / 60;
}
