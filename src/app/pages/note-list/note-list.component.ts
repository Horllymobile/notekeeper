import { Component, OnInit } from '@angular/core';
import { Note } from './../../models/notes';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[];

  constructor() { }

  ngOnInit(): void {
    this.notes = [
      {
        id: 1,
        title: "The Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 2,
        title: "My Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 3,
        title: "I love Note Keepers",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 4,
        title: "Alway Use Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 5,
        title: "The Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 6,
        title: "My Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 7,
        title: "I love Note Keepers",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      },
      {
        id: 8,
        title: "Alway Use Note Keeper",
        note: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nulla officia porro beatae voluptatibus ea pariatur fugiat dicta sint impedit? Soluta!`
      }
    ]
  }

}
