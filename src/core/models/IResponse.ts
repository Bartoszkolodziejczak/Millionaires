import { IQuestion } from './IQuestion';

export interface IResponse {
  response_code: number;
  results: IQuestion[];
}
