import { Routes, RouterModule }    from '@angular/router';
import { AboutComponent }          from './components/about.component';

const notesRoutes: Routes = [
    { path: '' , component: AboutComponent },
];

export default RouterModule.forChild( notesRoutes );