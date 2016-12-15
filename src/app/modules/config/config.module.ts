import { NgModule }              from '@angular/core';
import { CommonModule }          from "@angular/common";
import { ConfigComponent }       from './components/config.component';
import { ConfigUserComponent }   from "./components/config.user.component";
import { ConfigAppComponent }   from "./components/config.app.component";
import configRoutes              from './config.routes';

@NgModule({
    imports     : [ CommonModule, configRoutes ],
    declarations: [ ConfigComponent, ConfigUserComponent, ConfigAppComponent ],
})

export default class ConfigModule { }
