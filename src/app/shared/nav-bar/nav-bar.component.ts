import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  logged = false;
  username = '';
  logInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('username')) {
      this.logged = true;
      this.username = localStorage.getItem('username')!;
    }
  }

  async logIn(): Promise<void> {
    if (this.logInForm.valid) {
      const values = this.logInForm.value;
      try {
        const result = await this.authService.logIn({
          username: values.username!,
          password: values.password!,
        });
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', result.username);
        this.logged = true;
        this.username = result.username;
      } catch {}
    }
  }

  async logOut(): Promise<void> {
    localStorage.clear();
    this.logged = false;
  }
}
