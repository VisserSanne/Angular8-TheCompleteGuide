import { Directive, ElementRef, OnInit } from "@angular/core";

// We make the selector as an attribute, so you can use it directly in the html
@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
