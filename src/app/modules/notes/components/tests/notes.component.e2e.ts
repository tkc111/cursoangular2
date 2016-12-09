'use strict';

describe('Notes Page', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have h3 header', () => {
        let subject = element(by.tagName('h3')).isPresent();
        expect(subject).toEqual(true);
    });

    it('should have h3 header with "Notes" text', () => {
        let subject = element(by.tagName('h3'));
        expect(subject.getText()).toBe('Notes');
    });
});
