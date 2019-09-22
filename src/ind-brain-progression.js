import readlineSync from 'readline-sync';

export const gameRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  console.log('');
};
export const gameLogic = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const getRandom10 = getRandomInt(10);
    const mProg = [];
    const firstElement = getRandomInt(100);
    mProg[0] = firstElement;
    const step = getRandomInt(100) + 1;
    let currentNumber = firstElement;
    for (let j = 1; j < 10; j += 1) {
      mProg[j] = Number(`${currentNumber + step}`);
      currentNumber += +step;
    }
    let result;
    const hideElement = (array) => {
      const myArray = array;
      result = Number(myArray[getRandom10]);
      myArray[getRandom10] = '..';
      return myArray;
    };
    const finalString = (array) => {
      let resultString = '';
      for (let k = 0; k < 10; k += 1) {
        resultString += `${array[k]} `;
      }
      return resultString;
    };
    const stringOutput = `${finalString(hideElement(mProg))}`;
    console.log(`Question: ${stringOutput}`);
    const answer = +readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result} \n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
