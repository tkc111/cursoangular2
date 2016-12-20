import { NgModule }            from '@angular/core';
import { CommonModule }        from "@angular/common";
import { FormsModule }         from '@angular/forms';
import { LoginComponent }      from './components/index';
import { AuthService }         from './services/index';       
import loginRoutes             from './login.routes';


@NgModule({
    imports      : [ CommonModule
                   , loginRoutes
                   , FormsModule ],
    declarations : [ LoginComponent ],
    providers    : [ AuthService ]
})

export default class LoginModule { }
