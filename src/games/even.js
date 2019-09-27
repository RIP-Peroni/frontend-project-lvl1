import launchGame from '../gameEngine';
import { getRandomNumber } from '../getRandomNumber';

const ruleForGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const createLogicOfGameEven = () => {
  const isEvenNumber = (number) => number % 2 === 0;
  const question = getRandomNumber(100);
  const correctAnswer = isEvenNumber(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(ruleForGame, createLogicOfGameEven);
};
