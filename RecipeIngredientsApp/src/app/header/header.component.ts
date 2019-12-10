import { Component, EventEmitter, Output } from "@angular/core";
import { headersToString } from "selenium-webdriver/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<String>();
  collapsed = true;

  onSelect(feature: String) {
    this.featureSelected.emit(feature);
  }
}
