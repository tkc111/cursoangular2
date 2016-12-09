import { Component, OnInit, Input } from '@angular/core';
import { Router }                   from "@angular/router";
import { INote }                    from "./../models/note.model";

@Component({
    selector: 'note-mini',
    templateUrl: './app/modules/notes/components/tpl/note.mini.component.html'
})
export class NoteMiniComponent {
    @Input() 
    note: INote;

    constructor( private _router : Router ) { 
    }

    public goNote( id: number ) {
        this._router.navigate( ['note', id] );
    }
}