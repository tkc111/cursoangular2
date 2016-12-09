import { Injectable }  from '@angular/core';
import { INote }       from "./../models/note.model";
import { NOTES }       from './notes.list.mock';

@Injectable()
export class NotesListService {
    getNotes(): Array<INote> { return NOTES; }
    
    getNote( id:number ) {
        let filtrado = NOTES.filter( a => a.id === id );
        return ( filtrado.length && filtrado.pop() ) || null;
    }
    constructor() { }
}