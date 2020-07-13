import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinRoutingModule } from './win-routing.module';
import * as fromComponents from './components';


@NgModule({
  declarations: [
    ...fromComponents.components
  ],
  imports: [
    CommonModule,
    WinRoutingModule
  ]
})
export class WinModule { }
