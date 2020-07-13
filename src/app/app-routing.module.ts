import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    loadChildren: '../main/main.module#MainModule'
  },
  {
    path: 'question',
    loadChildren: '../question/question.module#QuestionModule'
  },
  {
    path: 'game-over',
    loadChildren: '../game-over/game-over.module#GameOverModule'
  },
  {
    path: 'winner',
    loadChildren: '../win/win.module#WinModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
