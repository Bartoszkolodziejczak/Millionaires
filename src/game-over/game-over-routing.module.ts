import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOverComponent } from './components/game-over/game-over.component';
import { InitGameOverGuard } from './guards/init-game-over.guard';


const routes: Routes = [
  {
    path: '',
    component: GameOverComponent,
    canActivate: [InitGameOverGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameOverRoutingModule {
}
