import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'What number is missing in the progression?';

const getProgressionWithConcealedElement = (start, diff, elementsCount, concealedIndex) => {
  let progression = '';
  for (let i = 0; i < elementsCount; i += 1) {
    const isConcealed = i === concealedIndex;
    progression = isConcealed ? `${progression} ..` : `${progression} ${start + diff * i}`;
  }
  return progression.trim();
};

const elementsCount = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 10);
  const concealedIndex = getRandomNumber(0, elementsCount - 1);
  const question = getProgressionWithConcealedElement(start, diff, elementsCount, concealedIndex);
  const correctAnswer = String(start + diff * concealedIndex);
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
