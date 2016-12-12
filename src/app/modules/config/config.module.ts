import { NgModule }         from '@angular/core';
import { CommonModule }     from "@angular/common";
import { ConfigComponent }   from './components/config.component';
import configRoutes          from './config.routes';

@NgModule({
    imports     : [ CommonModule, configRoutes ],
    declarations: [ ConfigComponent ],
})

export default class ConfigModule { }
