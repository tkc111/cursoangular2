import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesComponent }  from './notes/notes.component';

import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: 'notes' , component: NotesComponent },
    { path: ''      , component: NotesComponent },
    { path: 'about' , component: AboutComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot( appRoutes );
