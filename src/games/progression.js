import launchGame from '../gameEngine';
import { getRandomNumber, getRandomNumberIncluding0 } from '../getRandomNumber';

const ruleForGame = 'What number is missing in the progression?';

const showNumbersWithoutCommas = (array) => {
  let resultString = '';
  for (let k = 0; k < 10; k += 1) {
    resultString += `${array[k]} `;
  }
  return resultString;
};

const createLogicOfGameProgression = () => {
  const elementNumber = getRandomNumberIncluding0(10);
  const numbers = [];
  const firstElement = getRandomNumber(100);
  numbers[0] = firstElement;
  const stepOfProgression = getRandomNumber(10);
  let currentNumber = firstElement;
  for (let j = 1; j < 10; j += 1) {
    numbers[j] = Number(`${currentNumber + stepOfProgression}`);
    currentNumber += +stepOfProgression;
  }
  let correctAnswer;
  const hideElement = (array) => {
    const myArray = array;
    correctAnswer = String(myArray[elementNumber]);
    myArray[elementNumber] = '..';
    return myArray;
  };
  const question = `${showNumbersWithoutCommas(hideElement(numbers))}`;
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(ruleForGame, createLogicOfGameProgression);
};
