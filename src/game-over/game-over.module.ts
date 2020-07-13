import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOverRoutingModule } from './game-over-routing.module';
import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    GameOverRoutingModule
  ]
})
export class GameOverModule { }
