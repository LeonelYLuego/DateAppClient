import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

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
        this.logInForm.reset();
        this.router.navigate(['/members']);
      } catch {
        this.toastr.info('User or password incorrect');
      }
    }
  }

  async logOut(): Promise<void> {
    localStorage.clear();
    this.logged = false;
    this.router.navigate(['/']);
  }
}
