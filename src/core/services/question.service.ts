import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { commonHttpHeaders } from './common-http-headers';
import { map } from 'rxjs/operators';
import { IQuestion } from '../models/IQuestion';
import { IResponse } from '../models/IResponse';

const QUESTION_URL = '/api.php?amount=12';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IResponse>(`/millionaires${QUESTION_URL}`, commonHttpHeaders).pipe(
      map((response: IResponse) => response.results)
    );
  }

}
