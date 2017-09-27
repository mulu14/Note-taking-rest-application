import { Injectable } from '@angular/core';
import {CreateuserService} from './createuser.service';
import {FormControl} from '@angular/forms';

@Injectable()
/*the serverce class use another service class to check if the username is taken*/
export class UsernamevalidationService {

  debouncer: any; // local variable

  constructor(public creatuser: CreateuserService) { }
/*acceot control as an argument*/
/*return a promise */
/*if the username is taken return true*/
/* id username is not taken return null*/
  usernametaken (control: FormControl) {
    clearTimeout(this.debouncer);

    return new Promise(resolve => {
      this.debouncer = setTimeout(() =>  {
        this.creatuser.isavilable(control.value)
        .subscribe(res => {
          if (res.available === true) {
            resolve(null);
          }
        }, error => {
          resolve({'usernametaken': true});
        });
      }, 1000);
    });
  }

}
