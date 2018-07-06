//-------------
// STARDATE.JS
//-------------
// by Malte Janßen
//
// Example Usage:
// const now = new Date();
// stardate({
//   year: now.getFullYear(),
//   month: now.getMonth(),
//   day: now.getDate(),
//   hour: now.getHours(),
//   minute: now.getMinutes(),
//   second: now.getSeconds(),
// });

const leapYear = year => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

const stardate = (date) => {
  let xDay;
  let dayArray;

  if (leapYear(date.year)) {
    xDay = 366;
    dayArray = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
  } else {
    xDay = 365;
    dayArray = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  }

  // Day of the Year
  const dayOfTheYear = dayArray[date.month] + date.day - 1;

  const earthdate = date.year +
                    (dayOfTheYear + (date.hour / 24) +
                    (date.minute / 1440) +
                    (date.second / 86400)) /
                    xDay;

  return 1000 * (earthdate - 2323);
};

module.exports = stardate;
