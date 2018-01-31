import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  signupForm = new FormGroup ({
    username: new FormControl( '', [
      Validators.required,
      Validators.minLength(4),
    ] ),
    password: new FormControl( '', [
      Validators.required,
      Validators.minLength(5)
    ] )
  });

  get username() {
    return this.signupForm.get('username');
  }
  get password() {
    return this.signupForm.get('password');
  }

  submit(f) {
    console.log(f);
  }

}
