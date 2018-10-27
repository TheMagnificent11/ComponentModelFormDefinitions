import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
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

export const getFormsState = createFeatureSelector<FormsState>('form-definitions');

export const formDefinition = createSelector(getFormsState, (state: FormsState) => state.formDefinition);
export const formDefinitionError = createSelector(getFormsState, (state: FormsState) => state.error);
