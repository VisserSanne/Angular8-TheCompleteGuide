import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form", { static: true }) form: NgForm;
  subscription = "advanced";
  user = {
    email: "",
    subscription: "",
    password: ""
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.form.value.email;
    this.user.subscription = this.form.value.subscription;
    this.user.password = this.form.value.password;

    console.log(this.form.value.email);
    console.log(this.form.value.subscription);
    console.log(this.form.value.password);
    this.form.reset();
  }
}
