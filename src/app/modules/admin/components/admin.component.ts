import { Component }    from "@angular/core";
import { Router }       from "@angular/router";

@Component({
	selector : "admin",
	template : `
		<ul>
			<li><a [routerLink]="['/admin']" >Administrar</a></li>
			<li><a [routerLink]="['users']" >Gestionar Usuarios</a></li>
			<li><a [routerLink]="['articulos']" >Gestionar Artículos</a></li>
		<ul>
	`,
	styles: [`
		h1 { color : #7e7; }
		a { cursor: pointer }
	`]
})
export class AdminToolList {

}