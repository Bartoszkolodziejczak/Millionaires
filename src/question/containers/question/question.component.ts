import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../core/services/question.service';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IQuestion } from '../../../core/models/IQuestion';
import { ActivatedRoute, Router } from '@angular/router';
import { combineAll, map, tap } from 'rxjs/operators';
import { IQuestionItem } from '../../models/iquestion-item';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public question$: Observable<IQuestionItem>;
  public username: string;

  private currentQuestionNumberSubject = new BehaviorSubject<number>(0);
  public currentQuestionNumber$ = this.currentQuestionNumberSubject.asObservable();

  private currentQuestion = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.username = localStorage.getItem('username');

    const questions$ = this.route.data.pipe(
      map(data => data.questions)
    );

    this.question$ = combineLatest(
      questions$,
      this.currentQuestionNumber$
    ).pipe(
      map(([questions, currentQuestionNumber]) => questions[currentQuestionNumber]),
    );

  }


  onUserAnswerIsCorrect(isCorrectAnswer: boolean) {
    if (isCorrectAnswer) {
      this.currentQuestion++;
      if (this.currentQuestion < 12) {
        this.currentQuestionNumberSubject.next(this.currentQuestion);
      } else {
        localStorage.setItem('win', 'win');
        this.router.navigate(['winner']);
      }
    } else {
      localStorage.setItem('lose', 'lose');
      this.router.navigate(['game-over']);
    }
  }

  onStartNewGame() {
    this.router.navigate(['main']);
  }

}
