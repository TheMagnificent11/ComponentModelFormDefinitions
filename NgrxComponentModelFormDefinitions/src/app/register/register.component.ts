import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { PostUsersAction, RegistrationRequest } from 'api/index';
import { AppState, postUserSuccess } from '../app.reducer';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

    @ViewChild('form') form: FormComponent<RegistrationRequest>;

    private alive = true;
    private userCreated$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.userCreated$ = this.store.select(postUserSuccess);
    }

    ngOnInit(): void {
        this.userCreated$
            .pipe(
                takeWhile(() => this.alive),
                filter(result => !!result)
            )
            .subscribe(() => {
                this.router.navigate(['/']);
            });
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

    onSubmit(request: RegistrationRequest): void {
        if (!request || !request.email) return;

        this.store.dispatch(new PostUsersAction(request));
    }

}
