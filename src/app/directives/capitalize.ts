import { Component
       , Directive
       , Input
       , ElementRef }    from '@angular/core';

@Directive({ 
    selector: '[capitalize]' 
})

export class CapitalizeDirective {
    @Input('capitalize')   capitalize: boolean;
    
    constructor( private _e: ElementRef ) {
         
     }

     private capitalizar() {
         this._e.nativeElement.style.textTransform = ( this.capitalize ? 'capitalize' : 'note' );
     }
}