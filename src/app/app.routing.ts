import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }            from './modules/auth/index';
import { AppComponent }         from './components/index';

const appRoutes: Routes = [
    { path : ''         , redirectTo: 'about', pathMatch: 'full' },
    { path : 'login'    , loadChildren: './app/modules/auth/login.module'},
    { path : 'about'    , loadChildren: './app/modules/about/about.module'},
    { path : 'notes'    , loadChildren: './app/modules/notes/notes.module', canActivate : [ AuthGuard ] },
    { path : 'config'   , loadChildren: './app/modules/config/config.module'},
    { path : 'admin'    , loadChildren: './app/modules/admin/admin.module'},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
