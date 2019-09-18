import readlineSync from 'readline-sync';

export const gameRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};
export const gameLogic = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const floorRandom = () => Math.floor(Math.random() * 100);
    const firstNumber = floorRandom();
    const secondNumber = floorRandom();
    const sign = () => {
      const signValue = floorRandom();
      if (signValue < 33) {
        return '*';
      }
      if (signValue >= 33 && signValue < 66) {
        return '-';
      }
      return '+';
    };
    const stringOutput = `${firstNumber} ${sign()} ${secondNumber}`;
    const result = +eval(`${stringOutput}`);
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
