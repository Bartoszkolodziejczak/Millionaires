import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../core/services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions$: Observable<any[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions$ = this.questionService.getQuestions();
  }

}
