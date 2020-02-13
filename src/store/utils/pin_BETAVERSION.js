//Generate random numbers between 0 and
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Save the numbers to an array
function saveToArray() {
  let arr = [];
  for (let index = 0; index < 4; index++) {
    let result = getRandomNumber(0, 9);
    arr.push(result);
  }
  if (isValid(arr)) {
    return arr;
  } else {
    saveToArray();
  }
  return arr;
}

//check for consecutive numbers
function isConsecutive(n1, n2) {
  return Math.abs(n1 - n2) === 1;
}

//check if the array has 3 consecutive equal values
function isValid(array) {
  for (let i = 0; i + 2 < array.length; i++) {
    let n1 = array[i],
      n2 = array[i + 1],
      n3 = array[i + 2];
    if (isConsecutive(n1, n2) && isConsecutive(n2, n3)) return false;
  }
  return true;
}

//generate 5 unique pins
function generateAllPins() {
  let arr = [];
  for (let index = 0; index <= 4; index++) {
    const result = saveToArray();
    if (!arr.includes(result)) arr.push(result);
  }
  return arr;
}

console.log(generateAllPins());
