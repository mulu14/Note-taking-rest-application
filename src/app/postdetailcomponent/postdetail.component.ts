import { Component, OnInit, Output, OnChanges, Input, EventEmitter} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location } from '@angular/common';
import { NoteserviceService} from './../noteservice/noteservice.service';
import {Notetemplate} from './../notetemplate/note';
import {EmitterService} from './../eventemiter/emitter.service';
import {GetpostService} from './../getpost/getpost.service';
import {DeleteService} from './../noteservice/delete.service';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
/*bad naming*/
/*the name suppose to be note list class*/
/*class get note from server and display on view/html*/
/*it is a child to noteComponent*/
export class PostdetailComponent implements OnInit, OnChanges  {
 errorMessage: string;    // local variable for error message from server
 noteArray: Notetemplate []; // note array from server
 @Input () listId: string;  // input to track change in list item
 @Input () editId: string; // input for track edit
 @Input () note; // note input
  constructor (private g_post: GetpostService, private deletePost: DeleteService) {

   }


  ngOnInit() {
    this.getNotes(); // call server when the page lode

  }
// the function use service provider to communicate with server.
// get all the note from server and store in noteArray variable
// show any error
  getNotes() {
    this.g_post.getPost()
    .subscribe(data => {
     this.noteArray = data;
    }, error => {
        this.errorMessage = <any> error;
    });

  }


/*emit note  id */
  editNote(id: string) {
    EmitterService.get(this.editId).emit(id);
  }

/* delete a note*/
/*accept note id */
/*emit data */
  delete(id) {
    this.deletePost.deletePost(id)
    .subscribe(data => {
       EmitterService.get(this.listId).emit(data);
       console.log(data);
    }, error => {
      this.errorMessage = error;
    });
  }

  // track change in in the components using event emitter id
  // update the list
  ngOnChanges(changes: any) {
    EmitterService.get(this.listId).subscribe((message) => {
      // this.noteArray.push(message); // saving on local variable
       this.getNotes();  // giving error, token expired
       // update from server, token expire error!!
       });
  }
}
