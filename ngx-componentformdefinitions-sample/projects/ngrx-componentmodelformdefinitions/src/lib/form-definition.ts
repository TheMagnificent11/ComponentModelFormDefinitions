import { FieldDefinition } from './field-definition';

export interface FormDefinition {
  formId?: string;
  fieldDefinitions?: FieldDefinition[];
}
