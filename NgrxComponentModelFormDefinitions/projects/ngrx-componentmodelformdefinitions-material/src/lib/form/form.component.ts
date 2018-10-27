import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { takeWhile, filter, } from 'rxjs/operators';
import { DynamicFormControlModel, DynamicFormService, DynamicInputModel } from '@ng-dynamic-forms/core';
import { FormsState, GetFormDefinitionAction, formDefinition } from 'ngrx-componentmodelformdefinitions';
import { FormDefinitionConverter } from '../form-definition-converter';

@Component({
    selector: 'mat-fd-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

    @Input('form-id') formId: string;
    @Input('submit-button-label') submitButtonLabel = 'Submit';

    isLoaded = false;
    formGroup: FormGroup;

    private alive = true;
    private formModel: Array<DynamicFormControlModel>;

    constructor(
        private store: Store<FormsState>,
        private formService: DynamicFormService
    ) { }

    ngOnInit() {
        this.store
            .select(formDefinition)
            .pipe(
                takeWhile(() => this.alive),
                filter(form => !!form)
            )
            .subscribe(resp => {
                this.formModel = FormDefinitionConverter.convert(resp);
                this.formGroup = this.formService.createFormGroup(this.formModel);
                this.isLoaded = true;
            });

        this.store.dispatch(new GetFormDefinitionAction(this.formId));
    }

    ngOnDestroy() {
        this.alive = false;
    }

    getInputStringValue(inputId: string): string {
        const model = this.formService.findById(inputId, this.formModel) as DynamicInputModel;
        if (!model) return null;

        const val = model.value as string;

        return val.trim();
    }

}
