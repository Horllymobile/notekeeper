import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from './../../services/notes/notes.service';
@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  noteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private notesService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        note: ['', []]
      }
    )
  }


  saveNote(){
    console.log('clicking')
    this.notesService.addNewNote(this.noteForm.value)
    .then(data => {
      console.log('submitted')
      this.noteForm.reset();
      this.router.navigateByUrl('/');
    }).catch(err => console.log(err));
  }

  cancle(){

    if(confirm('Are your sure')){
      this.router.navigateByUrl('/');
    }

  }

}
