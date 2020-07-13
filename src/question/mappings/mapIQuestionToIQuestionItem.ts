import { IQuestion } from '../../core/models/IQuestion';
import { IQuestionItem } from '../models/iquestion-item';

export function mapIQuestionToIQuestionItem(question: IQuestion): IQuestionItem {
  return {
    category: question.category,
    correct_answer: question.correct_answer,
    question: question.question,
    all_answers: createAllAnswersArray(question.correct_answer, question.incorrect_answers)
  };
}

function createAllAnswersArray(correctAnswer: string, incorrectAnswers: string[]): string[] {
  const allAnswers: string[] = incorrectAnswers;
  allAnswers.push(correctAnswer)
  return allAnswers.sort(() => Math.random() - 0.5);
}
