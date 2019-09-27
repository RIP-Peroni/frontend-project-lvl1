import readlineSync from 'readline-sync';

const numberOfRoundsForWin = 3;

const launchGame = (ruleForGame, logicForGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${ruleForGame} \n`);
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}! \n`);
  for (let i = 0; i < numberOfRoundsForWin; i += 1) {
    const { question, correctAnswer } = logicForGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchGame;
