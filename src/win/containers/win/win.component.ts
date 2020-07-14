import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-win',
  templateUrl: './win.component.html',
  styleUrls: ['./win.component.scss']
})
export class WinComponent implements OnDestroy {

  public userReward: string = localStorage.getItem('userReward');

  constructor(private router: Router) { }

  onPlayAgain() {
    this.router.navigate(['main']);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('userReward');
    localStorage.removeItem('win');
  }

}
