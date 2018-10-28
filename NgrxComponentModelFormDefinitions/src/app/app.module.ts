import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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
        NgrxComponentmodelformdefinitionsMaterialModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
