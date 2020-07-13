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


  userAnswer(answer: string, correctAnswer: string) {
    const isCorrectAnswer: boolean = answer === correctAnswer;
    this.userAnswerIsCorrect.emit(isCorrectAnswer);
  }

  newGame() {
    this.startNewGame.emit();
  }

}
