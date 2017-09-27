import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Create} from './../logObject/create';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
/* add user to database*/
/*check if username is taken or not*/
export class CreateuserService {
  constructor (private http: Http) {
  }
  createuserUrl = 'http://localhost:4500/api/users'; // url address for user
  checkavaliblity = 'http://localhost:4500/api/users/check-availability/';  // urdl address for checking if user name is taken or not

  /*the function take three argument*/
  /*stringify the argument and send in the nody of request*/

     addUser (username: string, password: string, passwordConfirmation: string ) {
        const body = JSON.stringify({username: username, password: password, passwordConfirmation: passwordConfirmation}); // Stringify payload
        const headers = new Headers({'Content-Type': 'application/json'} );
        const options  = new RequestOptions({ headers: headers}); // Create a request option

        return this.http.post(this.createuserUrl, body, options) // ...using post request
                         .map((res: Response) => {
                         }) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

  // check if the  user is avilable in database
    isavilable(username) {
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' ); // ... Set content type to JSON
        // Create a request option

        return this.http.get(this.checkavaliblity + username, {headers: headers}) // ...using post request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }


    }

