import { Injectable }  from '@angular/core';
import { INote }       from "./../models/note.model";
import { NOTES }       from './notes.list.mock';

@Injectable()
export class NotesListService {
    getNotes(): Array<INote> { return NOTES; }
    
    getNote( id:number ) {
        let filtrado = NOTES.filter( a => a.id === id );
        return ( filtrado.length && filtrado.pop() ) || null;
    }

/*
    newArticulo(articulo:IArticulo) {
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append('Authorization','Bearer ' + this._authService.token );
        let options = new RequestOptions({ headers: headers });
     
        return this._http.put(this.url_new_articulo, articulo, options);
    }   
*/

    constructor() { }
}