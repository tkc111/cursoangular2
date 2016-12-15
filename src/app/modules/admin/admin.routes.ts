import { Routes, RouterModule }    from '@angular/router';
import { NotesComponent }          from './components/notes.component';
import { NoteDetailComponent }     from "./components/note.detail.component";
import { AuthGuard }               from "./auth.guard";

const notesRoutes: Routes = [
    { path: ''        , component: AdminComponent, canActivate: [AuthGuard] 
        children: [
            {path : 'loginpage', component : LoginPageComponent}
        ]},
];

export default RouterModule.forChild( notesRoutes );