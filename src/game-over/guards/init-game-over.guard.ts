import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InitGameOverGuard implements CanActivate {
  canActivate(): boolean {
    return !!localStorage.getItem('lose');
  }

}
