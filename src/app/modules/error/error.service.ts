import { Injectable } from '@angular/core';
import { SERVER_ENDPOINTS } from 'src/app/core/constants/server_endpoints.constant';
import { HttpPetitions } from 'src/app/core/services/http-petitions.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private http: HttpPetitions) {}

  async get400Error(): Promise<void> {
    return await this.http.get(SERVER_ENDPOINTS.BUGGY.BAD_REQUEST);
  }

  async get401Error(): Promise<void> {
    return await this.http.get(SERVER_ENDPOINTS.BUGGY.AUTH);
  }

  async get404Error(): Promise<void> {
    return await this.http.get(SERVER_ENDPOINTS.BUGGY.NOT_FOUND);
  }

  async get500Error(): Promise<void> {
    return await this.http.get(SERVER_ENDPOINTS.BUGGY.SERVER_ERROR);
  }
}
