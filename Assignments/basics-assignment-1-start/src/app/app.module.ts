import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SuccesAlertComponent } from "./succesAlert/succesAlert.component";
import { WarningAlertComponent } from "./warningAlert/warningAlert.component";

@NgModule({
  declarations: [AppComponent, SuccesAlertComponent, WarningAlertComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent, SuccesAlertComponent, WarningAlertComponent]
})
export class AppModule {}
