import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register implements OnInit {
  public registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      usernameControl: new FormControl('', [Validators.required]),
      emailControl: new FormControl('', [Validators.email, Validators.required]),
      passwordControl: new FormControl('', [Validators.required, Validators.min(6)]),
      confirmPassControl: new FormControl('', [Validators.required, Validators.min(6)]),
      termsControl : new FormControl('',Validators.requiredTrue)
    });
  }
  onRegisterSubmit(formdata : FormGroup):void{
    console.log(formdata);
  }
}