import launchGame from '../gameEngine';
import getRandomNumber from '../getRandomNumber';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, diff, elementsCount, concealedElement) => {
  let progression = '';
  for (let i = 0; i < elementsCount; i += 1) {
    const isConcealed = i === concealedElement;
    progression = isConcealed ? `${progression} ..` : `${progression} ${start + diff * i}`;
  }
  return progression.trim();
};

const elementsCount = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 10);
  const concealedElement = getRandomNumber(0, elementsCount - 1);
  const question = getProgression(start, diff, elementsCount, concealedElement);
  const correctAnswer = String(start + diff * concealedElement);
  return {
    question,
    correctAnswer,
  };
};

export default () => {
  launchGame(gameDescription, getQuestionAndAnswer);
};
