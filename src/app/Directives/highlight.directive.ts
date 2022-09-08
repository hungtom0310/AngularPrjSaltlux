import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = 'blue';
  constructor(private el: ElementRef) {
    // console.log('ngOnInit Highlight Directives', this.appHighlight);
    // el.nativeElement.style.color = this.appHighlight;
  }
  public ngOnInit(): void {
    console.log('ngOnInit Highlight Directives', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
