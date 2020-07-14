import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IQuestionItem } from '../../models/iquestion-item';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionPageComponent  {

  @Input()
  question: IQuestionItem;

  @Input()
  username: string;

  @Output()
  userAnswerIsCorrect = new EventEmitter<boolean>();

  @Output()
  startNewGame = new EventEmitter<void>();


  userAnswer(answer: string, correctAnswer: string, userReward: number) {
    const isCorrectAnswer: boolean = answer === correctAnswer;
    if (isCorrectAnswer) {
      localStorage.setItem('userReward', userReward.toString());
    }
    this.userAnswerIsCorrect.emit(isCorrectAnswer);
  }

  newGame() {
    this.startNewGame.emit();
  }

}
