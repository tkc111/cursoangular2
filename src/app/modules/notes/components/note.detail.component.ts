import { Component, OnInit, OnDestroy, HostBinding
	   , trigger, transition, animate
	   , style, state } 		 	    	          from '@angular/core';
import { Router, ActivatedRoute, Params } 	from '@angular/router';
import { INote }                            from "./../models/note.model";
import { NotesListService }                 from "./../services/notes.list.service";

@Component({
    selector    : 'note-detail​​',
    templateUrl : './app/modules/notes/components/tpl/note.detail.component.html',
    providers   : [ NotesListService ],
	animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ]),
  ]
})
export class NoteDetailComponent implements OnInit, OnDestroy {
    private note      : INote;
    private id        : number;
    private params_sub: any;
	
    @HostBinding('@routeAnimation') get routeAnimation() { return true; }
	  @HostBinding('style.display')   get display() 		 { return 'block'; }
	  @HostBinding('style.position')  get position() 		 { return 'absolute'; }

    constructor(
      private _route 				: ActivatedRoute,
      private _router 			: Router,
      private _notesListService 	: NotesListService
    ){
      this.note = null;
    }

    ngOnInit() {
      this.params_sub = this._route.params.subscribe( params => {
        let id : number = parseInt(params['id']);
        this.loadNote( id );
      });
    }

    ngOnDestroy() {
      this.params_sub.unsubscribe();
    }

      loadNote( id:number ) {
      this.note = this._notesListService.getNote( id );
    }
}