import { Routes, RouterModule }    from '@angular/router';
import { NotesComponent }          from './components/notes.component';
import { NoteDetailComponent }     from "./components/note.detail.component";

const notesRoutes: Routes = [
    { path: ''        , component: NotesComponent, 
        children: [
            { path: 'note/:id', component: NoteDetailComponent }
        ]},
];

export default RouterModule.forChild( notesRoutes );