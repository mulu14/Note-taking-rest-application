import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {CreateuserService } from './../services/createuser.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
/*class for registering new user*/
/*reactive form being used for asynchronous validating user name */

export class RegisterComponent implements OnInit {
    errorMessage: String; /*local variable used for displaying error message from server*/
    username = ''; /*user name from form*/
    password= ''; /*password from form*/
    passwordConfirmation = ''; /*passwordconfirmation from form*/
    checkname: boolean; /*boolean for checkname */
    form: FormGroup; /*declaration form group*/

  constructor(private fb: FormBuilder, private createUserService: CreateuserService, private route: Router) {
     this.form = this.fb.group({
          'username': [null, Validators.required, this.usernametaken.bind(this)],
          'password': [null, Validators.required],
          'passwordConfirmation': [null, Validators.required]
        });

   }

  ngOnInit() {
  }

/*add user to  database*/
/*accept three argument*/
/*direct to login page */
  addUser() {
         this.createUserService.addUser(this.form.value.username, this.form.value.password, this.form.value.passwordConfirmation)
         .subscribe(resp => {
          console.log(resp);
         }, error => {
             this.errorMessage = <any> error;
            });
            this.route.navigate(['login']);
    }
/*check if username is taken*/
/*if username is not taken return null*/
/*if username is taken return true*/
usernametaken (control: FormControl) {
    return new Promise(resolve => {
       setTimeout(() =>  {
        this.createUserService.isavilable(control.value)
        .subscribe(res => {
          if (res.available === true) {
            resolve(null);
          }
        }, error => {
          resolve({'usernametaken': true});
        });
      }, 500);
    });
  }




}
