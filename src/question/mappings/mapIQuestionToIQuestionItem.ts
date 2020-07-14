import { IQuestion } from '../../core/models/IQuestion';
import { IQuestionItem } from '../models/iquestion-item';

export function mapIQuestionToIQuestionItem(question: IQuestion, index: number): IQuestionItem {
  return {
    category: question.category,
    correct_answer: question.correct_answer,
    question: question.question,
    all_answers: createAllAnswersArray(question.correct_answer, question.incorrect_answers),
    question_price: createQuestionPrice(index),
    question_number: index + 1,
  };
}

function createAllAnswersArray(correctAnswer: string, incorrectAnswers: string[]): string[] {
  const allAnswers: string[] = incorrectAnswers;
  allAnswers.push(correctAnswer)
  return allAnswers.sort(() => Math.random() - 0.5);
}

function createQuestionPrice(index: number): number {
    if (index === 0) {
      return 100;
    } else if (index === 1) {
      return 200;
    } else if (index === 2) {
      return 500;
    } else if (index === 3) {
      return 1000;
    } else if (index === 4) {
      return 4000;
    } else if (index === 5) {
      return 16000;
    } else if (index === 6) {
      return 32000;
    } else if (index === 7) {
      return 64000;
    } else if (index === 8) {
      return 125000;
    } else if (index === 9) {
      return 250000;
    } else if (index === 10) {
      return 500000;
    } else if (index === 11) {
      return 1000000;
    } else {
      return 0;
    }
}
