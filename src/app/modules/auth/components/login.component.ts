import { OnInit, Component }    from '@angular/core';
import { Router }               from '@angular/router';
import { AuthService }          from './../index';
 
 
@Component({
    templateUrl: './app/modules/auth/components/tpl/login.component.html'
})
export class LoginComponent implements OnInit {
    credenciales : any = {
    	login : '',
    	pw : ''
    };
    error = '';

    constructor(
    	private _router: Router ) {}
 
    login() {
    /*    this._authService.login(this.credenciales.login, this.credenciales.password)
            .then(result => {
                if (result) {
                    this._router.navigate(['/admin']);
                } else {
                    this.error = 'Fallo autenticación';
                }
            })
            .catch ( err => this.error = ""+err );*/
    }

 	ngOnInit() {
        //this._authService.logout();
    }    
}