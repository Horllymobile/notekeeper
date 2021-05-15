import Localbase from 'localbase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/notes';

@Injectable({
    providedIn: 'root'
})
export class NoteService {

    private apiUrl = 'api/notes';
    db:Localbase;

    constructor(
    ){
        this.db = new Localbase('notes');
    }

    getNote(noteId: number): Promise<any>{
        return this.db.collection('notes').doc({ id: +noteId }).get();
    }

    getNotes(): Promise<any>{
        return this.db.collection('notes').get();
    }

    addNewNote(noteObject: Note): Promise<any> {
        noteObject.id = Date.now() / 2;
        return this.db.collection('notes').add(noteObject);
    }

    updateNote(noteId: number, editedNoteObject: Note): Promise<any>{
        return this.db.collection('notes').doc({id: +noteId}).set({
            id: +noteId,
            title: editedNoteObject.title,
            note: editedNoteObject.note
        })
    }

    deleteNote(noteId: number): Promise<any>{
        return this.db.collection('notes').doc({id: +noteId}).delete();
    }
}
