import { Injectable }               from '@angular/core';
import { Observable }               from 'rxjs';
import { Http, Response, Headers }  from '@angular/http';
 
@Injectable()
export class AuthService {
    public token: string;
 
    constructor( private _http: Http ) {
        // vemos si tenemos en el localStorage el token de usuario. Lo almacenaremos en JSON. Recuerda que localStorage solo puede almacenar Strings (API Storage de HTML5)
        var user = JSON.parse(localStorage.getItem('user'));
        this.token = user && user.token;
    }
    //TODO: https ------- cambiar
    login( login: string, password: string ) {
        return this._http.post('/login', JSON.stringify({ login: login, password: password }))
            .toPromise().then( response => {
                let token = response.json() && response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('user', JSON.stringify({ login: login, token: token }));
                    return true;
                } else {
                    return false;
                }               
            })
            .catch ( err => console.error(err) );
    }
 
    logout() {
        localStorage.removeItem('user');
        this.token = null; 
    }
}