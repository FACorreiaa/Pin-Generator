import { saveToArray } from './saveToArray';

//generate 5 unique pins
export const generateAllPins = (): Array<Array<number>> => {
  let arr: Array<Array<number>> = [];
  for (let index = 0; index <= 4; index++) {
    let result: Array<number> = saveToArray();
    if (!arr.includes(result)) arr.push(result);
  }
  return arr;
};

console.log(this.generateAllPins());
