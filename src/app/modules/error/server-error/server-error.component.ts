import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css'],
})
export class ServerErrorComponent implements OnInit {
  error: {
    error: string;
    message: string;
    status: number;
    url: string;
  };

  constructor(private router: Router) {
    this.error = this.router.getCurrentNavigation()?.extras as any;
  }

  ngOnInit(): void {}
}
