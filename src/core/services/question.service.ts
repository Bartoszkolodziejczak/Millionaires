import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { commonHttpHeaders } from './common-http-headers';
import { map } from 'rxjs/operators';
import { IQuestion } from '../models/IQuestion';
import { IResponse } from '../models/IResponse';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient) { }

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IResponse>('/questions', commonHttpHeaders).pipe(
      map((response: IResponse) => response.results)
    );
  }

}
