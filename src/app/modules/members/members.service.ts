import { Injectable } from '@angular/core';
import { HttpPetitions } from 'src/app/core/services/http-petitions.service';
import { Member } from './models/member.interface';
import { SERVER_ENDPOINTS } from 'src/app/core/constants/server_endpoints.constant';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  constructor(private http: HttpPetitions) {}

  async getMembers(): Promise<Member[]> {
    return this.http.get<Member[]>(SERVER_ENDPOINTS.USERS.BASE_ENDPOINT);
  }

  async getMember(username: string): Promise<Member> {
    return this.http.get<Member>(SERVER_ENDPOINTS.USERS.BY_USERNAME(username));
  }
}
