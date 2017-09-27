import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Notetemplate} from './../notetemplate/note';
// the class put Note into server
@Injectable()
export class EditService {
// declearing head variable
noteData: Object;  // Object to save note object
token = localStorage.getItem('currentUser'); // get current user from local storage
  constructor(private _http: Http) {
   }

/*The function accept three argument/paramters*/
/*pass the server response to extractData function*/
updatePost(title: string, text: string, id: string) {
const body = JSON.stringify({noteData: {title: title, text: text}});
  const headers = new Headers();
  headers.append( 'Content-Type', 'application/json' );
   headers.append('authentication-token', this.token);
  const options = new RequestOptions({headers: headers });
        return this._http.put('http://localhost:4500/api/notes/' + id, body, options)
                         .map(this.extractData);

}


/*the function map response to JSON format*/
/*return the formated data*/
   private extractData(res: Response) {
    return res.text() ? res.json() : {};
}
}
