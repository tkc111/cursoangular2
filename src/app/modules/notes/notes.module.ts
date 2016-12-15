import { NgModule }            from '@angular/core';
import { CommonModule }        from "@angular/common";
import { FormsModule }         from '@angular/forms';
import { NotesComponent
       , NotesListComponent
       , NoteMiniComponent
       , NoteDetailComponent
       , NotesListService }    from './index';
import notesRoutes             from './notes.routes';
import { TruncatePipe }        from "./../../pipes/truncate";

@NgModule({
    imports      : [ CommonModule
                   , notesRoutes
                   , FormsModule ],
    declarations : [ NotesComponent
                   , NotesListComponent
                   , NoteMiniComponent
                   , NoteDetailComponent
                   , TruncatePipe ],
    providers    : [ NotesListService ]
})

export default class NotesModule { }
