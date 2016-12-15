import { OnInit, Component } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthService }       from './../../../services/auth.service';
 

@Component({
    templateUrl: './app/modules/admin/components/tpl/login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    credenciales : any = {
    	login : '',
    	pw : ''
    };
    error = '';

    constructor(
    	private _router     : Router, 
        private _authService: AuthService
    ) {}
 
    login() {
        this._authService.login( this.credenciales.login, this.credenciales.pw )
            .then(result => {
                if (result) { this._router.navigate( ['/admin'] ); } 
                else        { this.error = 'Fallo autenticación'; }
            })
            .catch ( err => this.error = "" + err );
    }

 	ngOnInit() {
        this._authService.logout();
    }    
}