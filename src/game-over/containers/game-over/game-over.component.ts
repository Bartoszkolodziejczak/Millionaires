import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit, OnDestroy {

  public userReward: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userReward: string = localStorage.getItem('userReward');
    this.userReward = (userReward) ? userReward : '0';
  }

  navigateToMainPage() {
    this.router.navigate(['question']);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('lose');
    localStorage.removeItem('userReward');
  }

}
