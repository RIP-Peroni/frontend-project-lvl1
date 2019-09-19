import readlineSync from 'readline-sync';

export const gameRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
};
export const gameLogic = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const floorRandom = () => Math.floor(Math.random() * 100);
    const firstNumber = floorRandom();
    const secondNumber = floorRandom();
    const stringOutput = `${firstNumber} ${secondNumber}`;
    console.log(`Question: ${stringOutput}`);
    const nod = (a, b) => {
      let aResult = a;
      let bResult = b;
      while (aResult !== 0 && bResult !== 0) {
        if (aResult > bResult) {
          aResult %= bResult;
        } else {
          bResult %= aResult;
        }
      }
      return aResult + bResult;
    };
    const result = nod(firstNumber, secondNumber);
    const answer = +readlineSync.question('Your answer: ');
    if (answer === result) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result} \n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
