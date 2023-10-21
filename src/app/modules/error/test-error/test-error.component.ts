import { Component } from '@angular/core';
import { ErrorService } from '../error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css'],
})
export class TestErrorComponent {
  constructor(private errorService: ErrorService, private router: Router) {}

  async get400Error(): Promise<void> {
    try {
      await this.errorService.get400Error();
    } catch (ex: any) {
      this.router.navigateByUrl('/error/details', ex);
    }
  }

  async get401Error(): Promise<void> {
    try {
      await this.errorService.get401Error();
    } catch (ex: any) {
      this.router.navigateByUrl('/error/details', ex);
    }
  }

  async get404Error(): Promise<void> {
    try {
      await this.errorService.get404Error();
    } catch (ex: any) {
      this.router.navigateByUrl('/error/details', ex);
    }
  }

  async get500Error(): Promise<void> {
    try {
      await this.errorService.get500Error();
    } catch (ex: any) {
      this.router.navigateByUrl('/error/details', ex);
    }
  }
}
