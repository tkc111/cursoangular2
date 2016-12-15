import { Routes, RouterModule }   from '@angular/router';
import { ConfigComponent }        from './components/config.component';
import { ConfigUserComponent }    from './components/config.user.component';
import { ConfigAppComponent }     from './components/config.app.component';

const configRoutes: Routes = [
    { path: ''            , component: ConfigComponent,
        children: [
            { path: 'user', component: ConfigUserComponent },
            { path: 'app' , component: ConfigAppComponent }
        ] },
    ];

export default RouterModule.forChild( configRoutes );