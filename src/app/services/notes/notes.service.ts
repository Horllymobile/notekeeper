import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/notes';


@Injectable({
    providedIn: 'root'
})
export class NoteService {

    private apiUrl = 'api/notes';

    constructor(
        private http: HttpClient
    ){}

    getNotes(): Observable<Note[]>{
        return this.http.get<Note[]>(this.apiUrl);
    }

    addNewNote(noteObject: Note) {
        return this.http.post<Note>(this.apiUrl, noteObject);
    }

    editNote(editedNoteObject: Note){

    }

    deleteNote() {

    }
}
