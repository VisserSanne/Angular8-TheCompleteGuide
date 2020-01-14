import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  buttonText = "Display Details";
  detailsShow = true;
  buttonClicksNum = 0;
  buttonClicks = [];

  displayDetails() {
    this.buttonClicksNum++;
    this.buttonClicks.push(this.buttonClicksNum);
    if (this.detailsShow) {
      this.detailsShow = false;
      this.buttonText = "Hide details";
    } else {
      this.detailsShow = true;
      this.buttonText = "Display Details";
    }
  }

  getColor(click: number) {
    if (click >= 5) {
      return "white";
    }
  }

  getBackgroundColor(click: number) {
    if (click >= 5) {
      return "blue";
    }
  }
}
