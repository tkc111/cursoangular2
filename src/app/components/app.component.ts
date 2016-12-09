import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app/components/tpl/app.component.html'
})

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log('AppComponent initializing...');
    }
}
