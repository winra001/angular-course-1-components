import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[highlighted]',
    exportAs: 'hl'
})
export class HighlightedDirective {

    constructor() {
        console.log('Directive created');
    }

    @Input('highlighted')
    isHighlighted = false;

    @Output()
    toggleHighlight = new EventEmitter();

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

    // Host Listener
    @HostListener('mouseover', ['$event'])
    mouseOver($event) {
        console.log('mouseOver() - $event', $event);
        this.isHighlighted = true;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
    mouseLeave() {
        this.isHighlighted = false;
        this.toggleHighlight.emit(this.isHighlighted);
    }

    // Directive Export
    toggle() {
        console.log('Directive Export');
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
    }

}
