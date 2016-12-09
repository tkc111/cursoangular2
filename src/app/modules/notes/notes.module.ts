import { NgModule }           from '@angular/core';
import { CommonModule }       from "@angular/common";
import { NotesComponent }     from './components/notes.component';
import { NotesListComponent } from "./components/notes.list.component";
import { NoteMiniComponent } from "./components/note.mini.component";
import { NotesListService }   from "./services/notes.list.service";
import notesRoutes            from './notes.routes';
import { TruncatePipe }       from "./../../pipes/truncate";

@NgModule({
    imports      : [ CommonModule, notesRoutes ],
    declarations : [ NotesComponent, NotesListComponent, NoteMiniComponent, TruncatePipe ],
    providers    : [ NotesListService ]
})

export default class NotesModule { }
