import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import { NgrxComponentmodelformdefinitionsMaterialModule } from 'ngrx-componentmodelformdefinitions-material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: RegisterComponent
            }
        ]),
        DynamicFormsCoreModule.forRoot(),
        DynamicFormsMaterialUIModule,
        NgrxComponentmodelformdefinitionsMaterialModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
