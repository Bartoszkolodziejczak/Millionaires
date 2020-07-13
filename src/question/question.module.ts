import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionResolver } from './resolvers/question.resolver';
import * as fromContainers from './containers';
import * as fromComponents from './components';




@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule
  ],
  providers: [
    QuestionResolver
  ]
})
export class QuestionModule { }
