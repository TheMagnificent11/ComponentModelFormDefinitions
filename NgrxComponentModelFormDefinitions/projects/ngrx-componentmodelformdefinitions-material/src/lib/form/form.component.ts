import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeWhile, filter, } from 'rxjs/operators';
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
    @Output() submit = new EventEmitter<T>();

    isLoaded = false;
    formGroup: FormGroup;
    formModel: Array<DynamicFormControlModel>;

    private alive = true;
    private formDef: FormDefinition;

    constructor(
        public formService: DynamicFormService,
        private store: Store<FormsState>
    ) { }

    ngOnInit() {
        this.store
            .select(formDefinition)
            .pipe(
                takeWhile(() => this.alive),
                filter(form => !!form)
            )
            .subscribe(resp => {
                this.formDef = resp;
                this.formModel = FormDefinitionConverter.convert(resp);
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

}
