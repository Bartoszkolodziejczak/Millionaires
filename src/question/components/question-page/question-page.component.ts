import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionPageComponent implements OnInit {

  @Input()
  questions: any[];

  constructor() { }

  ngOnInit() {
  }

}
