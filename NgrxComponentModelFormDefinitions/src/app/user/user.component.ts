import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { takeWhile, filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FormComponent } from 'ngrx-componentmodelformdefinitions-material';
import { User, GetUserAction, PutUserAction } from 'api/index';
import { AppState, putUserSuccess, getUserById } from '../app.reducer';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

    @ViewChild('form') form: FormComponent<User>;
    getUser$: Observable<User>;

    private alive = true;
    private userUpdated$: Observable<boolean>;

    constructor(private store: Store<AppState>, private router: Router, private activedRoute: ActivatedRoute) {
        this.getUser$ = this.store.select(getUserById);
        this.userUpdated$ = this.store.select(putUserSuccess);
    }

    ngOnInit(): void {
        this.activedRoute.paramMap
            .pipe(
                takeWhile(() => this.alive),
                map(params => params.get('id'))
            )
            .subscribe(userId => this.store.dispatch(new GetUserAction(userId)));

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
