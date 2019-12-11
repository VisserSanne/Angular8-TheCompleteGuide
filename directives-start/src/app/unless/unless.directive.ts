import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  // If you use "set" you sort of bind a function to a property. Everytime this property changes you execute the function
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    // This is just like ElementRef, but this does it for the template
    private templateRef: TemplateRef<any>,
    // This marks the place where we place the directive in the document
    private viewContainerRef: ViewContainerRef
  ) {}
}
