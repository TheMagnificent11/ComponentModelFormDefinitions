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
export class UsersByIdGetFormService {
  form: FormGroup;
  constructor(
    private usersService: UsersService,
  ) {
    this.form = new FormGroup({
      id: new FormControl(undefined, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.usersService.usersByIdGet(data);
  }
}
