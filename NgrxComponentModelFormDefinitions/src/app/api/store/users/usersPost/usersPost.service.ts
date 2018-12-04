/* tslint:disable:max-line-length */
/**
 * v1
 * Sample API
 * undefined
 */

import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../controllers/Users';

@Injectable()
export class UsersPostFormService {
  form: FormGroup;
  constructor(
    private usersService: UsersService,
  ) {
    this.form = new FormGroup({
      request: new FormGroup({
        givenName: new FormControl(undefined, [Validators.maxLength(50), Validators.required]),
        surname: new FormControl(undefined, [Validators.maxLength(50), Validators.required]),
        email: new FormControl(undefined, [Validators.maxLength(255), Validators.required]),
        password: new FormControl(undefined, [Validators.required]),
        confirmPassword: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.usersService.usersPost(data);
  }
}
