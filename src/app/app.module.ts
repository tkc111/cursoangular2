import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule
      ,  JsonpModule }          from '@angular/http';
import { routing
      ,  appRoutingProviders }  from './app.routing';

import { AppComponent }         from './components/app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports     : [ BrowserModule,
                    FormsModule,
                    HttpModule,
                    JsonpModule,
                    routing
                  ],
    providers   : [ appRoutingProviders] ,
    bootstrap   : [ AppComponent ]
})

export class AppModule {
}
