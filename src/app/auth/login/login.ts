import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/AuthService';
import { UserService } from '../../../services/UserService';
import { FormsModule, NgForm } from '@angular/forms';
import { Alert } from '../../components/alert/alert';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Alert, RouterLink],
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
  showAlert = signal<number>(0);

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
        this.showAlert.set(this.showAlert()+1);
      },
    });
  }
}
