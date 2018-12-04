/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface UsersPostParams {
  request?: __model.RegistrationRequest;
}

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  /** http://undefined/swagger/swagger-ui.html#!/Users/UsersGet */
  usersGet(): Observable<__model.User[]> {
    return this.http.get<__model.User[]>(`/Users`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/Users/UsersPost */
  usersPost(params: UsersPostParams): Observable<void> {
    const bodyParams = params.request;
    const bodyParamsWithoutUndefined: any = {};
    Object.entries(bodyParams || {}).forEach(([key, value]) => {
      if (value !== undefined) bodyParamsWithoutUndefined[key] = value;
    });
    return this.http.post<void>(`/Users`, bodyParamsWithoutUndefined);
  }
}
