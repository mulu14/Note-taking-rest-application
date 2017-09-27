import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Notetemplate} from './../notetemplate/note';

@Injectable()
export class NoteserviceService {
noteData: Object; // Object to create note
 // create new head and save in local variable
token = localStorage.getItem('currentUser'); // get token from local storage
  constructor(private _http: Http) {
   }

   /*the function accept two argument */
   /*create note in server*/
   /*pass server response to extractData function*/
   createPost(title: string, text: string) {
      const body = JSON.stringify({noteData: {title: title, text: text}});
      const headers = new Headers();
      headers.append( 'Content-Type', 'application/json' );
      headers.append('authentication-token', this.token);
      const options    = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:4500/api/notes', body, options)
                         .map(this.extractData);


   }
/*the function return specific paost from server*/
/*accept note id as argument*/
/*send server response to extractData function*/
getSpecificPost(id) {
      const headers = new Headers();
      headers.append( 'Content-Type', 'application/json' );
      headers.append('authentication-token', this.token);
      const options    = new RequestOptions({headers: headers });
        return this._http.get('http://localhost:4500/api/notes/' + id, options)
                         .map(this.extractData);

   }




/*map the server return to JSON data format and return*/
   private extractData(res: Response) {
    return res.text() ? res.json() : {};
}
}
