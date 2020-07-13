import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { QuestionService } from '../../core/services/question.service';
import { map } from 'rxjs/operators';
import { IQuestion } from '../../core/models/IQuestion';
import { mapIQuestionToIQuestionItem } from '../mappings/mapIQuestionToIQuestionItem';
import { IQuestionItem } from '../models/iquestion-item';

@Injectable()
export class QuestionResolver implements Resolve<IQuestionItem[]> {

  constructor(private questionService: QuestionService) {}

  resolve() {
    return this.questionService.getQuestions().pipe(
      map((questions: IQuestion[]) =>
        questions.map((question: IQuestion) => mapIQuestionToIQuestionItem(question)))
    );
  }
}
