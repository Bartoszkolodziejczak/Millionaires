import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitQuestionGuard implements CanActivate {
  canActivate(): boolean {
    const isPlayer: boolean = !!localStorage.getItem('username');
    return isPlayer;
  }

}
