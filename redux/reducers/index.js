import { combineReducers } from 'redux';
import { localeReducer, modalReducer } from './common';
import { loaderReducer, authReducer } from './api';

const rootReducers = combineReducers({
    locale: localeReducer,
    modal: modalReducer,
    loader: loaderReducer,
    auth: authReducer,
});
// export type ReduxStates = ReturnType<typeof rootReducers>;
export default rootReducers;
