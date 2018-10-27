import { FieldValidation } from './field-validation';

export interface FieldDefinition {
  id?: string;
  label?: string;
  inputType?: string;
  validators?: FieldValidation[];
}
