import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { FormComponent } from './form/form.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
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
