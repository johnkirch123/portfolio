import { useState, useEffect } from 'react';
import { triviaApi, triviaCategories } from '../../config/trivia';
import Quiz from '../quizComponents/Quiz';
import QuizForm from '../quizComponents/QuizForm';

const QuizApp = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {}, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const {
      numOfQuestions: { value: numOfQuestions },
      category: { value: category },
      difficulty: { value: difficulty },
      type: { value: type }
    } = e.target;
    let apiString = `${triviaApi}`;
    if (numOfQuestions !== '') apiString += `amount=${numOfQuestions}`;
    else apiString += `amount=10`;

    if (category !== 'Any Category')
      apiString += `&category=${triviaCategories.indexOf(category) + 8}`;

    if (difficulty !== 'Any Difficulty')
      apiString += `&difficulty=${difficulty.toLowerCase()}`;

    if (type !== 'Any Type') {
      if (type === 'True/False') apiString += `&type=boolean`;
      else apiString += `&type=multiple`;
    }

    const fetchQuestions = async () => {
      const data = await fetch(apiString);
      const { results } = await data.json();
      setQuiz(results);
    };
    fetchQuestions();
    document.querySelector('.quiz__form').classList.add('remove');
    document.querySelector('.quiz__main').classList.add('fadeIn');
    document.querySelector('.quiz__main').classList.remove('remove');
  };

  return (
    <div className='quiz'>
      <div className='quiz__contain'>
        <div className='quiz__container'>
          <h1 className='quiz__header'>Quiz App</h1>
          <QuizForm onFormSubmit={onFormSubmit} />
          <Quiz quiz={quiz} />
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
