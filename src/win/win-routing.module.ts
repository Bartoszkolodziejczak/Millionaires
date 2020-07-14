import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinComponent } from './containers/win/win.component';
import { InitWinGuard } from './guards/init-win.guard';


const routes: Routes = [
  {
    path: '',
    component: WinComponent,
    canActivate: [InitWinGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinRoutingModule {
}
