import {TestBed} from '@angular/core/testing';

import { NotesComponent } from './../notes.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({ declarations: [NotesComponent] }));

    it('should instantiate the HomeComponent', () => {
        let fixture = TestBed.createComponent(NotesComponent);
        expect(fixture.componentInstance instanceof NotesComponent).toBe(true, 'should create NotesComponent');
    });
});
