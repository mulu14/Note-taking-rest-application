import { Component, OnInit } from '@angular/core';
import {Notetemplate} from './../notetemplate/note';
// please note that token is expiring
// it is not client side problem

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
/*This component is parent to two components */
/*provide inputs to its childern component*/
export class NoteComponent implements OnInit {
   public listId = 'COMMENT_COMPONENT_LIST';
   public editId = 'COMMENT_COMPONENT_EDIT';
   public sendId = 'COMMENT_COMPONENT_SEND';
   public note = new Notetemplate('', '', '');

constructor() {


  }

  ngOnInit() {

  }
}
