import { Injectable } from '@angular/core';
import { AuthorizationTokenService } from 'ngx-netcore-api';

@Injectable({
    providedIn: 'root'
})
export class TokenService implements AuthorizationTokenService {

    constructor() { }

    getToken(): string {
        return null;
    }

}
