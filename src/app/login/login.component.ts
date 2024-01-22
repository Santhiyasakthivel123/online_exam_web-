import { RegisterService } from "./../register.service";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private https: RegisterService,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      mail: ["", Validators.required],

      password: ["", Validators.required],
    });
  }
  login() {
    this.https.getMethod().subscribe((response: any) => {
      const userData = response.filter(
        (user: any) =>
          user.email === this.loginForm.value.mail &&
          user.password === this.loginForm.value.password
      );
      if (userData.length) {
        alert("login successfully");
        this.route.navigateByUrl("instruction");
      } else {
        alert("User not found");
      }
    });
  }
}
