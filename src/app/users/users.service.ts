import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { catchError, of } from 'rxjs';

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

  updateUser(id: string, data: any) {
    return this._http.patch(environment.URL_API + '/api/v1/users/' + id, data).pipe(
      catchError((error) => {
        // console.log('error', error);
        return of(error);
      }),
    );
  }
}
