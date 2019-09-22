import readlineSync from 'readline-sync';

export const gameRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('');
};
export const gameLogic = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
    const firstNumber = getRandomInt(100);
    const secondNumber = getRandomInt(100);
    const sign = () => {
      const signValue = getRandomInt(30);
      if (signValue <= 10) {
        return '-';
      }
      if (signValue > 10 && signValue <= 20) {
        return '*';
      }
      return '+';
    };
    const fixedSign = sign();
    const getResult = (a, usedSign, b) => {
      if (usedSign === '+') {
        return a + +b;
      }
      if (usedSign === '-') {
        return a - b;
      }
      return a * b;
    };
    const stringOutput = `${firstNumber} ${fixedSign} ${secondNumber}`;
    const result = +`${getResult(firstNumber, fixedSign, secondNumber)}`;
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
