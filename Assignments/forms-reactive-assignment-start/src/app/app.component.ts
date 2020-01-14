import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  forbiddenProjectNames = ["Test"];

  ngOnInit() {
    this.form = new FormGroup({
      projectName: new FormControl(
        null,
        Validators.required,
        this.forbiddenProjectNameAsync.bind(this)
      ),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl("stable")
    });
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    } else {
      return null;
    }
  }

  forbiddenProjectNameAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.form);
  }
}
