import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  @Output()
  start = new EventEmitter<void>();

  public username: string;

  ngOnInit() {
    this.username = '';
  }

  startTheGame(): void {
    localStorage.setItem('username', this.username);
    this.start.emit();
  }

  get usernameValid(): boolean {
    return this.username.length > 0;
  }

}
