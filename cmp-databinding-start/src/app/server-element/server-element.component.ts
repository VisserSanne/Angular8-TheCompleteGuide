import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated // None (use as standard css)/Native (no standard css) Emulated is default
})
export class ServerElementComponent implements OnInit {
  // If you wanna make your element approachable for other classes add "@Input()" infront of the element
  // If you wanna add the element but with a different name add the new name between the brackets, now you can't add it via the original name
  @Input('serverElement') element: { type: String; name: String; content: String };

  constructor() {}

  ngOnInit() {}
}
