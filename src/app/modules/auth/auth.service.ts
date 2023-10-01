import { Injectable } from '@angular/core';
import { HttpPetitions } from 'src/app/core/services/http-petitions.service';
import { LogInInterface } from './models/log-in.interface';
import { ResponseLogInInterface } from './models/response-log-in.interface';
import { SERVER_ENDPOINTS } from 'src/app/core/constants/server_endpoints.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpPetitions) {}

  async logIn(credentials: LogInInterface): Promise<ResponseLogInInterface> {
    return await this.http.post<ResponseLogInInterface>(
      SERVER_ENDPOINTS.ACCOUNT.LOG_IN,
      credentials
    );
  }
}
