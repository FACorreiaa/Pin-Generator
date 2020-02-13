//Save the numbers to an array
export const saveToArray = () => {
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
};

//Generate random numbers between 0 and
const getRandomNumber = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//check if the array has 3 consecutive equal values
const isValid = (array: Array<number>): boolean => {
  for (let i = 0; i + 2 < array.length; i++) {
    let n1 = array[i],
      n2 = array[i + 1],
      n3 = array[i + 2];
    if (isConsecutive(n1, n2) && isConsecutive(n2, n3)) return false;
  }
  return true;
};

//check for consecutive numbers
const isConsecutive = (n1: number, n2: number): boolean => {
  return Math.abs(n1 - n2) === 1;
};

export default saveToArray;
