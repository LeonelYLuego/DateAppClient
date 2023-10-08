import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../users/models/user.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() response = new EventEmitter();
  users: User[] = [];
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {}

  cancel(): void {
    this.response.emit(false);
  }

  async register(): Promise<void> {
    if (this.registerForm.valid) {
      const values = this.registerForm.value;
      try {
        const result = await this.authService.register({
          username: values.username!,
          email: values.email!,
          password: values.password!,
        });
        localStorage.setItem('username', result.username);
        localStorage.setItem('token', result.token);
        window.location.reload();
      } catch {}
    }
  }
}
