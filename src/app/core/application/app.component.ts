import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/users/models/user.interface';
import { HttpPetitions } from '../services/http-petitions.service';
import { SERVER_ENDPOINTS } from '../constants/server_endpoints.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Dates App';
  users: User[] = [];

  constructor(private http: HttpPetitions) {}

  async ngOnInit(): Promise<User[]> {
    return await this.http.get<User[]>(SERVER_ENDPOINTS.USERS.BASE_ENDPOINT);
  }
}
