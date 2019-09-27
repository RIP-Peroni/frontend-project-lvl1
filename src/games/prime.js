import launchGame from '../gameEngine';
import { getRandomNumber } from '../getRandomNumber';

const ruleForGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let j = number - 1; j > 1; j -= 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const createLogicOfGame = () => {
  const question = getRandomNumber(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(ruleForGame, createLogicOfGame);
};
