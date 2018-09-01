import finalQuestions from '../data/data';

export const FETCH_QUESTIONS = 'fetch_questions';

export function fetchQuestions() {
    const questions = finalQuestions;
    console.log('action called',questions);
      return {
          type: FETCH_QUESTIONS,
          payload: questions
      }
}