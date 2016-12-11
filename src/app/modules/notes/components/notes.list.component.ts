import { Component, OnInit, Output }       	        from '@angular/core';
import { Router }                                   from "@angular/router";
import { NoteMiniComponent }                        from "./note.mini.component";
import { TruncatePipe }                             from "./../../../pipes/truncate";
import { NotesListService }                         from "./../services/notes.list.service";
import { INote, Note }                              from "./../models/note.model";

@Component({
    selector: 'notes-list',
    templateUrl: './app/modules/notes/components/tpl/notes.list.component.html',
})
export class NotesListComponent implements OnInit {
    notes        : Array<INote>;
    notes_filter     : Array<INote>;
    search           : string;
    sizeNotes        : number = 0;
    sizeNotesMapping : any = {
                               '=0': 'Sin notas',
                               '=1': 'Una nota',
                               'other': '# notas'
                             };  

    constructor( private _notesListService : NotesListService
               , private _router            : Router ) {
        this.search = "";
    }

    ngOnInit() { 
        this.notes = this._notesListService.getNotes();
        this.notes_filter = this.notes;
        this.sizeNotes = this.notes_filter.length;
    }

    public buscarNota() {
         this.notes_filter = this.notes.filter( (_note : Note) => (_note.contenido.indexOf(this.search) !== -1) || _note.titulo.indexOf(this.search) !== -1 );
         this.sizeNotes = this.notes_filter.length;
    }
}