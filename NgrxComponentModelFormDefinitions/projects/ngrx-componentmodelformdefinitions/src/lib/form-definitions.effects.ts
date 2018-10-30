import { Injectable, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ApiService } from 'ngx-netcore-api';
import { FormDefinition } from './form-definition';
import { FORM_DEFINTIONS_API_ROUTE } from './form-definitions.init';
import * as FormsStateActions from './form-definitions.actions';

@Injectable()
export class FormDefinitionsEffects {

    constructor(
        private actions: Actions,
        private api: ApiService,
        @Inject(FORM_DEFINTIONS_API_ROUTE) private formDefsRoute: string
    ) { }

    @Effect()
    retrieve$ = this.actions
        .ofType<FormsStateActions.GetFormDefinitionAction>(FormsStateActions.ActionTypes.GET_FORM_DEFINITION)
        .pipe(
            map(action => action.payload),
            switchMap(formId =>
                this.api.get<FormDefinition>(`${this.formDefsRoute}/${formId}`)
                    .pipe(
                        map(resp => {
                            return new FormsStateActions.GetFormDefitionSuccessAction(resp);
                        }),
                        catchError(error => {
                            return of(new FormsStateActions.GetFormDefintionErrorAction(error));
                        })
                    )
            )
        );

}
