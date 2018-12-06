import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { PostUsersAction, RegistrationRequest } from 'api/index';
import { AppState } from '../app.reducer';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('form') form: FormComponent<RegistrationRequest>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
    }

    onSubmit(request: RegistrationRequest): void {
        if (!request || !request.email) return;

        this.store.dispatch(new PostUsersAction(request));
    }

}
