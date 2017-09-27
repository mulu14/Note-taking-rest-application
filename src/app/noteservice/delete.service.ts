import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Notetemplate} from './../notetemplate/note';
/*the class delete a note */
@Injectable()
export class DeleteService {
 // header
token = localStorage.getItem('currentUser'); // get token from local storage
  constructor(private _http: Http) {
   }

/*delete the note and pass the server response to extractData function*/
/*the function accept note id as an argument*/
deletePost(id) {
  const headers = new Headers();
  headers.append( 'Content-Type', 'application/json' );
  headers.append('authentication-token', this.token);
  const options    = new RequestOptions({headers: headers });
        return this._http.delete('http://localhost:4500/api/notes/' + id, options)
                         .map(this.extractData);

}


/*map the server response to JSON format */
    extractData(res: Response) {
    return res.text() ? res.json() : {};
}
}
