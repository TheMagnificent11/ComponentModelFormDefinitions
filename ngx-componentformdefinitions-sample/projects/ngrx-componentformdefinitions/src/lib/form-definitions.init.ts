import { FormDefinition } from './form-definition';

export interface FormsState {
    loading: boolean;
    formDefinition: FormDefinition;
    error: any;
}

export const initialState: FormsState = {
    loading: false,
    formDefinition: null,
    error: null
};
