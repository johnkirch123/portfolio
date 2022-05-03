import {
  triviaApi,
  triviaCategories,
  triviaDifficulties,
  triviaTypes
} from '../../config/trivia';

const QuizForm = ({ onFormSubmit }) => {
  return (
    <form className='quiz__form' onSubmit={onFormSubmit}>
      <h1>Please Select Quiz Parameters: </h1>
      <div className='quiz__form--group'>
        <div className='quiz__form--group-number'>
          <label htmlFor='numOfQuestions'>Number Of Questions: </label>
          <input
            type='text'
            name='numOfQuestions'
            id='numOfQuestions'
            placeholder='10'
          />
        </div>
        <div className='quiz__form--group-params'>
          <div className='quiz__form--group-param'>
            <label htmlFor='category'>Category: </label>
            <select name='category' id='category'>
              {triviaCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className='quiz__form--group-param'>
            <label htmlFor='difficulty'>Difficulty: </label>
            <select name='difficulty' id='difficulty'>
              {triviaDifficulties.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className='quiz__form--group-param'>
            <label htmlFor='type'>Type: </label>
            <select name='type' id='type'>
              {triviaTypes.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <input
        type='submit'
        value='Submit'
        className='center button__white--outline'
      />
    </form>
  );
};

export default QuizForm;
