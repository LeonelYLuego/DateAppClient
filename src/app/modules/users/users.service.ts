import { Injectable } from '@angular/core';
import { User } from './models/user.interface';
import { HttpPetitions } from 'src/app/core/services/http-petitions.service';
import { SERVER_ENDPOINTS } from 'src/app/core/constants/server_endpoints.constant';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpPetitions) {}

  async findAll(): Promise<User[]> {
    return await this.http.get<User[]>(SERVER_ENDPOINTS.USERS.BASE_ENDPOINT);
  }
}
