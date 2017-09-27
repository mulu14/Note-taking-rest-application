import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Notetemplate} from './../notetemplate/note';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
/*class send request to server and get all the note list*/
export class GetpostService {

noteData: Object; // object declarartion

token = localStorage.getItem('currentUser'); // get token from local storage
  constructor(private _http: Http) {
   }
/* send request using get method*/
/*map the returned response*/
/*pass data to extractData function*/
 getPost() {
      const headers = new Headers(); // declear header
      headers.append( 'Accept', 'application/json' );
      headers.append('authentication-token', this.token); // append authentication  to header
      const options  = new RequestOptions({ headers: headers });
        return this._http.get('http://localhost:4500/api/notes', options)
                         .map(this.extractData);
   }
/* the function map data to JSON format */

   extractData(res: Response) {
    return res.text() ? res.json() : {};
}



}
