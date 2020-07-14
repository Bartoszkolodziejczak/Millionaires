import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameOverRoutingModule } from './game-over-routing.module';
import * as fromContainers from './containers';


@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    GameOverRoutingModule
  ]
})
export class GameOverModule { }
