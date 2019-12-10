import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated // None (use as standard css)/Native (no standard css) Emulated is default
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // If you wanna make your element approachable for other classes add "@Input()" infront of the element
  // If you wanna add the element but with a different name add the new name between the brackets, now you can't add it via the original name
  @Input("serverElement") element: {
    type: String;
    name: String;
    content: String;
  };
  @Input() name: String;
  // If you wanna approach something from a viewChild you can only get the content after "ngAfterViewInit()", it hasn't been rendered yet until this point
  @ViewChild("heading", { static: true }) header: ElementRef;

  // You don't just have ViewChild, you also have ContentChild. You can use ContentChild when you wanna bind something that's part of the content.
  // Just as ViewChild you can't approach the data before the "ngAfterViewInit()" function.
  @ContentChild("contentParagraph", { static: true })
  paragraph: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange");
    console.log(changes);
  }

  constructor() {}

  ngOnInit() {
    console.log("ngOnInit was called");
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log("Text content: " + this.paragraph.nativeElement.textContent);
  }

  // Gets called very often, whenever Angular checks for changes
  ngDoCheck() {
    console.log("ngDoCheck was called");
  }

  // Is only called once! After the ngOnInit() was called
  ngAfterContentInit() {
    console.log("ngAfterContentInit was called");
  }

  // Is called after each change cycle
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked was called");
  }

  // Those last ones are called as almost the last ones, so after the content was checked
  ngAfterViewInit() {
    console.log("ngAfterViewInit was called");
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log("Text content: " + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked was called");
  }

  // This function is called when something was deleted. It triggers the function and thus whatever is in it.
  ngOnDestroy() {
    console.log("ngOnDestroy was called");
  }
}
