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
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data.reverse();
    },error => {
      console.log(error);
    })
    setTimeout(() => {
      this.newNotes = this.notes;
    }, 500)
  }

  searchFunc(noteTitle: string){
    if(noteTitle){
      this.newNotes = this.notes.filter(note => note.title.toLowerCase().includes(noteTitle.toLowerCase()));
      return;
    }
    this.newNotes = this.notes;
  }

}
