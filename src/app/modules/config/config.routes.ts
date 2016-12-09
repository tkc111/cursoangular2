import { Routes, RouterModule }    from '@angular/router';
import { ConfigComponent }          from './config.component';

const configRoutes: Routes = [
    { path: '', component: ConfigComponent },
];

export default RouterModule.forChild( configRoutes );