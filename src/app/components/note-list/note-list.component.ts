import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/notes';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  p:number = 1;
  @Input() notes: Note[];
  constructor() { }

  @Output() delete = new EventEmitter();

  ngOnInit(): void {
    
  }

  deleteNote(note: Note){
    this.delete.emit(note.id);
  }

}
