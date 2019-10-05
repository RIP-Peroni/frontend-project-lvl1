import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let j = 2; j <= number / 2; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
