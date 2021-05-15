import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/notes';
import { NoteService } from './../../services/notes/notes.service';
@Component({
  selector: 'app-note',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  newNotes: Note[];
  constructor(
    private noteService: NoteService
  ){}
  ngOnInit() {
    this.noteService.getNotes().then((data: Note[]) => {
      this.notes = data;
      this.newNotes = this.notes;
    }).catch(err => console.log(err));
  }

  searchFunc(noteTitle: string){
    if(noteTitle){
      this.newNotes = this.notes.filter(note => note.title.toLowerCase().includes(noteTitle.toLowerCase()));
      return;
    }
    this.newNotes = this.notes;
  }

  deleteNote(noteId){
    if(confirm("Are you sure ?")){
      this.noteService.deleteNote(noteId)
      .then(data => {
        console.log(this.notes.findIndex(value => value.id === noteId));
        this.notes.splice(this.notes.findIndex(value => value.id === noteId), 1);
        this.newNotes = this.notes;
      })
      .catch(err => {});
    }
  }

}
