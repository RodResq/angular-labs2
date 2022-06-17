import { CoursesListComponent } from './../courses-list/courses-list.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloqueadorGuard implements CanActivate, CanDeactivate<CoursesListComponent> {
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    console.log(next, state);
    return false;
  }

  canDeactivate(
    component: CoursesListComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean {
    console.log(component, currentRoute, currentState, nextState);
    
    return false;
  }
  
}
