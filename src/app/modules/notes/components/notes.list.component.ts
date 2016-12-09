import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";
import { NoteMiniComponent } from "./note.mini.component";
import { TruncatePipe }      from "./../../../pipes/truncate";
import { NotesListService }  from "./../services/notes.list.service";
import { INote }             from "./../models/note.model";

@Component({
    selector: 'notes-list',
    templateUrl: './app/modules/notes/components/tpl/notes.list.component.html',
    
})
export class NotesListComponent implements OnInit {
    notes: Array<INote>;

    constructor( private _notesListService : NotesListService
               , private _router            : Router ) { }

    ngOnInit() { 
        this.notes = this._notesListService.getNotes();
    }
}