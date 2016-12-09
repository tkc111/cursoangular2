import { NgModule }         from '@angular/core';
import { CommonModule }     from "@angular/common";
import { AboutComponent }   from './about.component';
import aboutRoutes          from './about.routes';

@NgModule({
    imports     : [ CommonModule, aboutRoutes ],
    declarations: [ AboutComponent ],
})

export default class AboutModule { }
