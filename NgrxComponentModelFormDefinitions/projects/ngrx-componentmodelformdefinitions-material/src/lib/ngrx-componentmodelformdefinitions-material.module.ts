import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        CommonModule,
        StoreModule,
        DynamicFormsCoreModule,
        DynamicFormsMaterialUIModule
    ],
    declarations: [FormComponent],
    providers: [],
    exports: [
        FormComponent
    ]
})
export class NgrxComponentmodelformdefinitionsMaterialModule { }
