import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { takeWhile, filter, } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { DynamicFormControlModel, DynamicFormService, DynamicInputModel } from '@ng-dynamic-forms/core';
import { FormsState, GetFormDefinitionAction, FormDefinition, formDefinition } from 'ngrx-componentmodelformdefinitions';
import { FormDefinitionConverter } from '../form-definition-converter';

@Component({
    selector: 'mat-fd-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent<T> implements OnInit, OnDestroy {

    @Input('form-id') formId: string;
    @Input('submit-button-label') submitButtonLabel = 'Submit';
    @Input('get-entity') getEntity$: Observable<T>;
    @Output() submit = new EventEmitter<T>();

    isLoaded = false;
    formGroup: FormGroup;
    formModel: Array<DynamicFormControlModel>;

    private alive = true;
    private formDef: FormDefinition;
    private subscriptions$: Observable<[FormDefinition, T]>;

    constructor(
        public formService: DynamicFormService,
        private store: Store<FormsState>
    ) {
        const formDef$ = this.store.select(formDefinition);

        if (this.getEntity$) {
            this.subscriptions$ = combineLatest(formDef$, this.getEntity$);
        } else {
            this.subscriptions$ = combineLatest(formDef$, of({} as T));
        }
    }

    ngOnInit() {
        this.subscriptions$
            .pipe(takeWhile(() => this.alive))
            .subscribe(([formDef, model]) => {
                if (!formDef) return;

                this.formDef = formDef;
                this.formModel = FormDefinitionConverter.convert(formDef);
                this.setFormValues(model);
                this.formGroup = this.formService.createFormGroup(this.formModel);
                this.isLoaded = true;
            });

        this.store.dispatch(new GetFormDefinitionAction(this.formId));
    }

    ngOnDestroy() {
        this.alive = false;
    }

    onSubmit(): void {
        const request = {};

        for (const field of this.formDef.fieldDefinitions) {
            const formField = this.formService.findById(field.id, this.formModel) as DynamicInputModel;
            if (!formField) continue;
            request[field.id] = formField.value;
        }

        this.submit.emit(request as T);
    }

    getFieldValue(fieldId: string): string | number | Date | string[] {
        const formField = this.formService.findById(fieldId, this.formModel) as DynamicInputModel;
        if (!formField) return null;

        return formField.value;
    }

    private setFormValues(model: T): void {
        for (const item of this.formModel) {
            const value = model[item.id];
            if (!value) continue;

            if (!(item instanceof DynamicInputModel)) continue;

            const input = item as DynamicInputModel;

            input.valueUpdates.next(value);
        }
    }

}
