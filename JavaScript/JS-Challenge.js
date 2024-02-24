// 1. Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositiive (number) {
  let isNumberPositiive = true;
  if (number>0)
    return true;
  else {
    return false;
  }
}

console.log(isNumberPositiive(-1));
console.log(isNumberPositiive(10));


// 2. Write a function that takes a number of days and converts it into an age.

const ConvertDaysToAge = (numberOfDays) => {
  return numberOfDays / 365;
}

console.log(ConvertDaysToAge(3650));
console.log(ConvertDaysToAge(6570));



// 3. Write a function that takes three numbers and returns the largest of the three numbers.

// 4. Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (names) => {
  return(names[names.length-1]);
}


console.log(getLastName(["Charlie","Rob","Andy"]));
console.log(getLastName(["Ash", "Stu"]));


// 5. Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

function allNumbersPositive (x,y,z) {
  let allNumbersPositive = true;
  if (x && y && z > 0)
    return true;
  else if (x || y || z < 0)
    return false;
}

console.log(allNumbersPositive([2,4,5]));
console.log(allNumbersPositive([-5,4,6]));
