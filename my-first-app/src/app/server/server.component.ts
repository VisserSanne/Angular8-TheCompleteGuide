import { Component } from "@angular/core";

@Component({
  // Now you make this an attribute. This means that if you wanna use it in html you have can't have an component but use this as an attribute.
  // selector: "[app-server]",
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  // The type doesn't have to be here, it's staticicly seen by the value after the =
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
