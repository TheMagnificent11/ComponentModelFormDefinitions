import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgrxComponentModelFormDefinitionsModule, FORM_DEFINTIONS_API_ROUTE } from 'ngrx-componentmodelformdefinitions';
import { NgrxComponentmodelformdefinitionsMaterialModule } from 'ngrx-componentmodelformdefinitions-material';
import { NgxNetCoreApiModule, BASE_URL, AUTHORIZATION_TOKEN_SERVICE } from 'ngx-netcore-api';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TokenService } from './token.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {
                path: '',
                component: RegisterComponent
            }
        ]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        NgrxComponentModelFormDefinitionsModule,
        NgrxComponentmodelformdefinitionsMaterialModule,
        NgxNetCoreApiModule
    ],
    declarations: [
        AppComponent,
        RegisterComponent
    ],
    providers: [
        {
            provide: BASE_URL,
            useValue: 'https://localhost:5001'
        },
        {
            provide: FORM_DEFINTIONS_API_ROUTE,
            useValue: 'formdefinitions'
        },
        {
            provide: AUTHORIZATION_TOKEN_SERVICE,
            useClass: TokenService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
