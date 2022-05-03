import { useState, useEffect } from 'react';
const Quiz = ({ quiz }) => {
  const [answers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState({
    right: 0,
    wrong: 0
  });

  useEffect(() => {
    updateQuestion(quiz[questionNumber]);
  }, [quiz]);

  const updateQuestion = (quiz) => {
    let answers = [];
    if (quiz) {
      document.querySelector('.quiz__body--question').innerHTML = quiz.question;
      if (quiz.type === 'boolean') answers = ['True', 'False'];
      else answers = shuffle([quiz.correct_answer, ...quiz.incorrect_answers]);
      setAnswers(answers);
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ];
    }

    return array;
  };

  const handleAnswer = () => {
    if (questionNumber + 1 === quiz.length) {
      setTimeout(() => {
        document.querySelector('.quiz__main').classList.add('hide');
        document.querySelector('.quiz__form').classList.remove('remove');
        document.querySelector('.quiz__form').classList.add('show');
        alert(
          `You correctly guessed ${score.right} and incorrectly guessed ${score.wrong}`
        );
      }, 5000);
    }
    const radios = document.getElementsByName('answers');
    for (let radio of radios) {
      if (radio.checked) {
        if (radio.value == quiz[questionNumber].correct_answer) {
          score.right++;
          setQuestionNumber(questionNumber + 1);
        } else {
          score.wrong++;
          setQuestionNumber(questionNumber + 1);
        }
      }
      document.querySelector('.answer').classList.remove('hide');
      document.querySelector('.answer').classList.add('show');
    }
    setTimeout(() => {
      document.querySelector('.answer').classList.add('hide');
      document.querySelector('.answer').classList.remove('show');
    }, 3500);
    setTimeout(() => {
      updateQuestion(quiz[questionNumber + 1]);
    }, 4000);
  };
  return (
    <div className='quiz__main remove'>
      <div className='quiz__score'>
        <h2 className='quiz__score--right'>Right: {score.right}</h2>
        <h2 className='quiz__score--wrong'>Wrong: {score.wrong}</h2>
      </div>
      <div>
        <div className='quiz__info'>
          <h2 className='quiz__category'>
            Category: {quiz[questionNumber]?.category}
          </h2>
          <h2 className='quiz__category'>
            Difficulty: {quiz[questionNumber]?.difficulty}
          </h2>
          <h2 className='quiz__category'>
            Type:{' '}
            {quiz[questionNumber]?.type === 'boolean'
              ? 'True or False'
              : 'Multiple Choice'}
          </h2>
        </div>
        <div className='quiz__body'>
          <div className='quiz__body--question'></div>
          <div className='quiz__body--answers'>
            {answers?.map((answer) => (
              <div key={answer} className='quiz__body--answers-button-box'>
                <input type='radio' name='answers' value={answer} />
                {answer}
              </div>
            ))}
          </div>
          <input
            type='submit'
            className='button__white--outline'
            onClick={handleAnswer}
            value='Submit'
          />
        </div>
        <div className='answer hide'>
          Correct Answer: {quiz[questionNumber - 1]?.correct_answer}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
