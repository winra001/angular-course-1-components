import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[highlighted]'
})
export class HighlightedDirective {

    constructor() {
        console.log('Directive created');
    }

    @Input('highlighted')
    isHighlighted = false;

    @HostBinding('class.highlighted')
    get cssClasses() {
        return this.isHighlighted;
    }

    // @HostBinding('className')
    // get cssClasses() {
    //     return 'highlighted';
    // }

    // @HostBinding('style.border')
    // get cssClasses() {
    //     return '1px solid red';
    // }

    @HostBinding('attr.disabled')
    get disabled() {
        return 'true';
    }

}
