import { Component } from "@angular/core";

@Component({
  // Now you make this an attribute. This means that if you wanna use it in html you have can't have an component but use this as an attribute.
  // selector: "[app-server]",
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {}
