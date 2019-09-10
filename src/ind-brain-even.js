import readlineSync from 'readline-sync';

const evenOrNot = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no". \n'); // /n - perehod na novuu stroku
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && answer === 'yes')
      || (number % 2 === 1 && answer === 'no')) {
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
export default evenOrNot;
