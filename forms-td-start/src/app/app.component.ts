import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form", { static: true }) signupForm: NgForm;
  secretQuestion = "pet";
  answer = "";
  genders = ["male", "female"];
  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: ""
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // Here you can change all the values but not just one.
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: "email@email.com"
      },
      secretQuestion: "pet",
      questionAnswer: "Mellie",
      gender: "female"
    });

    // Here you can change just one value or multiple.
    // this.signupForm.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value["username"]);
  //   console.log(form.value["email"]);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secretQuestion;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
