import readlineSync from 'readline-sync';

export const gameRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log('');
};
export const gameLogic = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max)) + 1;
    const isPrime = (num) => {
      if (num <= 1) {
        return false;
      }
      if (num === 2) {
        return true;
      }
      for (let j = num - 1; j > 1; j -= 1) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    };
    const ourNumber = getRandomInt(1000);
    const stringOutput = `${ourNumber}`;
    console.log(`Question: ${stringOutput}`);
    const answer = readlineSync.question('Your answer: ');
    const result = isPrime(ourNumber);
    if ((answer === 'yes' && result === true)
      || (answer === 'no' && result === false)) {
      console.log('Correct!');
    } else if (answer !== 'yes' && answer !== 'no') {
      return console.log(`'${answer}' is incorrect answer ;(. \n Let's try again, ${name}!`);
    } else if (answer === 'yes') {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no') \n Let's try again, ${name}!`);
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'\n Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
