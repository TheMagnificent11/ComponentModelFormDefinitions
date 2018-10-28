import { Component, OnInit, ViewChild } from '@angular/core';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { RegistrationRequest } from './registration-request';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('form') form: FormComponent<RegistrationRequest>;

    constructor() { }

    ngOnInit() {
    }

    onSubmit(request: RegistrationRequest): void {
        alert(request.email);
    }

}
