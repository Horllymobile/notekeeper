import { Component } from '@angular/core';
import { Note } from './models/notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'note-keeper';
}
