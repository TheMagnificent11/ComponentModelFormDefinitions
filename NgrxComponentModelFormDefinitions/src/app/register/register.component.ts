import { Component, OnInit } from '@angular/core';
import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private formService: DynamicFormService) { }

    ngOnInit() {
    }

    onSubmit(formModel: Array<DynamicFormControlModel>): void {
        alert('yay');
    }

}
