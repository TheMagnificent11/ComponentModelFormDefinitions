import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { RegistrationRequest } from './registration-request';
import { ApiService } from 'ngx-netcore-api';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('form') form: FormComponent<RegistrationRequest>;

    constructor(private api: ApiService) { }

    ngOnInit() {
    }

    onSubmit(request: RegistrationRequest): void {
        if (!request || !request.email) return;

        this.api.post('users', request)
            .subscribe(() => this.showRequest(request), () => alert('boo'));
    }

    private showRequest(request: RegistrationRequest): void {
        const message = `
            Given Name: ${request.givenName}\n
            Surname: ${request.surname}\n
            Email: ${request.email}\n
            Password: ${request.password}\n
            Confirm Password: ${request.confirmPassword}
        `;

        alert(message);
    }

}
