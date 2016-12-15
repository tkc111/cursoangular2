import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path : ''         , loadChildren: './app/modules/notes/notes.module'},
    { path : 'notes'    , loadChildren: './app/modules/notes/notes.module'},
    { path : 'about'    , loadChildren: './app/modules/about/about.module'}, 
    { path : 'config'   , loadChildren: './app/modules/config/config.module'},
    { path : 'admin'    , loadChildren: './app/modules/admin/admin.module'},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
