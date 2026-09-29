import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/AuthService';
import { UserService } from '../../../services/UserService';
import { FormsModule, NgForm } from '@angular/forms';
import { Alert } from '../../components/alert/alert';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Alert],
  templateUrl: './login.html',
})
export class Login {
  constructor(
    private auth: AuthService,
    private user: UserService,
  ) {}
  email = 'mohamed';
  password = '1233';
  rememberMe = null;
  invalid = signal<boolean>(false);

  onClickLogin(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      console.log('ERRORRR');
      return;
    }
    const { email, password } = form.value;
    // make the request
    this.auth.login(email, password).subscribe({
      next: (res) => {
        this.auth.saveUser(res);
      },
      error: (err) => {
        this.invalid.set(true);
      },
    });
  }
}
