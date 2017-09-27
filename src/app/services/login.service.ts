import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/*login service provider*/
@Injectable()
export class LoginService {


    private loginUser = 'http://localhost:4500/api/login';  // url address for login
    constructor (private _http: Http) {

    }
    /*function take two argument*/
    /*return token if the username and password are correct*/
    /*save  token in local storage*/
      login(username: string, password: string) {

        const body = JSON.stringify({username: username, password: password});
        const headers = new Headers();
        headers.append( 'Content-Type', 'application/json' );
        const options    = new RequestOptions({ headers: headers });
        return this._http.post(this.loginUser, body, options)
                         .map((res: Response) => {
                            const token = res.json() && res.json().token; //
                            if (token) {
                                localStorage.setItem('currentUser', res.json().token); // token is saved here
                            }

                        })
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }



}
