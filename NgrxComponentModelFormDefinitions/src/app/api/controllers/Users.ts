/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'ngx-netcore-api';

import * as __model from '../model';

@Injectable()
export class UsersService {
    constructor(private http: ApiService) { }

    /** http://undefined/swagger/swagger-ui.html#!/Users/UsersGet */
    usersGet(): Observable<__model.User[]> {
        return this.http.get<__model.User[]>(`users`);
    }

    /** http://undefined/swagger/swagger-ui.html#!/Users/UsersPost */
    usersPost(params: __model.RegistrationRequest): Observable<void> {
        return this.http.post<void>(`users`, params);
    }
}
