import { Routes, RouterModule }    from '@angular/router';
import { LoginComponent }          from './components/index';

const loginRoutes: Routes = [
    { path: ''        , component: LoginComponent },
];

export default RouterModule.forChild( loginRoutes );