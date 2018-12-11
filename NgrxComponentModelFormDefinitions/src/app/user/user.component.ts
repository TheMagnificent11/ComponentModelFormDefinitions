import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { PutUserAction, User } from 'api/index';
import { AppState, putUserSuccess } from '../app.reducer';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

    @ViewChild('form') form: FormComponent<User>;

    private alive = true;
    private userUpdated$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router) {
        this.userUpdated$ = this.store.select(putUserSuccess);
    }

    ngOnInit(): void {
        this.userUpdated$
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

    onSubmit(request: User): void {
        if (!request || !request.email) return;

        this.store.dispatch(new PutUserAction(request));
    }

}
