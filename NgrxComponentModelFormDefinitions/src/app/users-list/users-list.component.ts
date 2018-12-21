import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { User, GetUsersAction } from 'api/index';
import { AppState, getUsers } from '../app.reducer';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

    displayedColumns: string[] = ['email', 'givenName', 'surname', 'actions'];
    data: Array<User> = [];

    private alive = true;
    private users$: Observable<Array<User>>;

    constructor(private store: Store<AppState>) {
        this.users$ = store.select(getUsers);
    }

    ngOnInit(): void {
        this.users$
            .pipe(takeWhile(() => this.alive))
            .subscribe(data => this.data = data);

        this.store.dispatch(new GetUsersAction());
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}
