import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {}
  public ngOnInit(): void {
    if (!this.appHighlight) {
      this.el.nativeElement.style.color = 'blue';
      console.log('test', this.appHighlight);
    } else {
      console.log('ngOnInit Highlight Directives', this.appHighlight);
      this.el.nativeElement.style.color = this.appHighlight;
    }
  }
}
