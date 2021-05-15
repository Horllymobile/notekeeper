import { Note } from 'src/app/models/notes';
import { NoteService } from './../../services/notes/notes.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
  editNoteForm: FormGroup;
  noteId: number;
  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private noteService: NoteService,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.editNoteForm = this.formBuilder.group(
      {
        title: ['', []],
        note: ['', []]
      }
    )
    this.noteId = this.router.snapshot.params.id;
    this.noteService.getNote(this.noteId).then((note: Note) => {
      this.editNoteForm.get('title').setValue(note.title);
      this.editNoteForm.get('note').setValue(note.note);
    }).catch(err => {
      console.log(err);
    });

  }

  saveNote(){

    this.noteService.updateNote(this.noteId, this.editNoteForm.value)
    .then(data => {
      alert('Note updated');
    }).catch(err => alert('error whilte updating note'));

  }

  cancle(){

    if(confirm('Are your sure')){
      this.route.navigateByUrl('/');
    }

  }

}
