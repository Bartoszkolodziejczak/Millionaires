import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './containers/question/question.component';
import { QuestionResolver } from './resolvers/question.resolver';
import { InitQuestionGuard } from './guards/init-question.guard';


const routes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    resolve: {
      questions: QuestionResolver
    },
    canActivate: [InitQuestionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {
}
