import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinRoutingModule } from './win-routing.module';
import * as fromContainers from './containers';


@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    CommonModule,
    WinRoutingModule
  ]
})
export class WinModule { }
