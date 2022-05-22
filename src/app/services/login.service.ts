import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public IsUserValidated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  

  changeIsUserValidated(x: boolean){
    this.IsUserValidated.next(x);
  }

}
