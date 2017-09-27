import { Component, OnInit, Output, Input,  EventEmitter, OnChanges} from '@angular/core';
import { NoteserviceService} from './../noteservice/noteservice.service';
import {DeleteService} from './../noteservice/delete.service';
import {EditService} from './../noteservice/edit.service';
import {EmitterService} from './../eventemiter/emitter.service';
import {Notetemplate} from './../notetemplate/note';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
/*the class is used for creating and saving edited note*/
export class NoteformComponent implements OnInit, OnChanges {
errorMessage: string; // local variable for shoing error
isedit = false; // boolean
@Input () listId: string;  // input for tracking list
@Input () editId: string; // input for tracking edit
@Input() note;

constructor(private edit: EditService, private noteservice: NoteserviceService) {
  }

  ngOnInit() {
  }
/* create a note and post to server*/
/*the function accept Notetemplete*/
/*emit success response from server*/
  postNote(note) {
    this.noteservice.createPost(this.note.title, this.note.text)
    .subscribe(data => {
      EmitterService.get(this.listId).emit(data);
      console.log(data);
      if (this.isedit) {
        this.isedit = !this.isedit;

      }
    }, error => {
        this.errorMessage = <any> error;
    });

  }


/*claer input field*/
  clear(note) {
    this.note.title = '';
    this.note.text = '';

  }
/*get specific Note from server*/
/*accept note id*/
/*set edit true*/
editNote(getid) {
    this.noteservice.getSpecificPost(getid)
    .subscribe(data => {
    this.note.id = data.id;
    this.note.title = data.title;
    this.note.text = data.text;
    },
    error => {
      this.errorMessage = error;
    });

     this.isedit = true;
  }
/*the function save data to server*/
/*emit server response*/
saveEdit(note, id) {
  this.edit.updatePost(this.note.title, this.note.text, id)
  .subscribe(data => {
    EmitterService.get(this.listId).emit(data);
    console.log(data);
  }, error => {
    this.errorMessage = error;
  });
  this.isedit = false;
}
/*get emitted id and uplode specific note into form */
ngOnChanges() {
EmitterService.get(this.editId).subscribe((id) => {
  this.editNote(id);

});

}

}
