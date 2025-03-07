import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {

  sidenavToggle = new Subject<boolean>;
  sidenavToggle$ = this.sidenavToggle.asObservable();

  constructor() { }

  openSidenav(actionVar: boolean){
    this.sidenavToggle.next(actionVar);
  }
}
