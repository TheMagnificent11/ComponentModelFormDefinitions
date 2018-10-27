import { FormsState, initialState } from './form-definitions.init';
import { Actions, ActionTypes } from './form-definitions.actions';

export function formsReducer(state: FormsState = initialState, action: Actions): FormsState {
    switch (action.type) {
        case ActionTypes.GET_FORM_DEFINITION:
            return {
               ...initialState,
               loading: true
            };

        case ActionTypes.GET_FORM_DEFINITION_ERROR:
            return {
                ...state,
                loading: false,
                formDefinition: null,
                error: action.payload
            };

        case ActionTypes.GET_FORM_DEFINITION_SUCCESS:
            return {
                ...state,
                loading: false,
                formDefinition: action.payload,
                error: null
            };

        default:
            return state;
    }
}
