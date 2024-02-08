import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _http = inject(HttpClient);

  constructor() {}

  getUsers() {
    return this._http.get(environment.URL_API + '/api/v1/users');
  }

  getUser(id: string) {
    return this._http.get(environment.URL_API + '/api/v1/users/' + id);
  }
}
