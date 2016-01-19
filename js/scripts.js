var leapYear = function(year) {
  //Lines 2-6 are not necessary for functionality because everything that's not a leap year is returned as false. Lines are used for readability and logic
  if (parseInt(year) === NaN) {
    return false;
  } else if (year === "september") {
    return false;
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
