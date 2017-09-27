import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {User} from './../logObject/user';
import {Router} from '@angular/router';
import { LoginService } from './../services/login.service';
import {EmitterService} from './../eventemiter/emitter.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser = new User('', ''); // user login information
  @Input() sendId; // emit variable for sending event when the user login
  errorMessage  = ''; // show any error message
  constructor(private logservice: LoginService, private route: Router) { }

  ngOnInit() {

  }

/*the function accept login information from form input field*/
/*on success the user directed to note page*/
/*on failure, the user remain on login page*/
  login() {
    this.logservice.login(this.currentUser.username, this.currentUser.password)
    .subscribe(resp => {
      this.route.navigate(['note']);
       EmitterService.get(this.sendId).emit('login');
    }, error => {

      this.route.navigate(['login']);
    });


  }

}
