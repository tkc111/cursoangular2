import { Routes, RouterModule }    from '@angular/router';
import { NotesComponent }          from './components/notes.component';

const notesRoutes: Routes = [
    { path: '', component: NotesComponent },
];

export default RouterModule.forChild( notesRoutes );