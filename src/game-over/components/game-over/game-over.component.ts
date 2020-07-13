import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnDestroy {

  constructor(private router: Router) { }

  navigateToMainPage() {
    this.router.navigate(['question']);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('lose');
  }

}
