import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import {EmitterService} from './eventemiter/emitter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*note taking application*/
/*create a note, save, edit and delete */
/*require user login information */


export class AppComponent {

@Input() sendId; // local veriable for  emited user token
logout= false; // set logout false
currentuser = localStorage.removeItem('currentUser'); // get username from Localstorage
constructor(private route: Router) {
EmitterService.get(this.sendId).subscribe((message) => {
  this.logout = true; // set logout true when the user is login
});
}
/* function set logout false*/
/*remove token /current user from localstorege*/
/*direct page to login*/

  logOut() {
    this.logout = false;
    localStorage.removeItem('currentUser');
    this.route.navigate(['login']);



  }



}
