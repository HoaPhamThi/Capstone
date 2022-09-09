import { SET_LOCALE, SET_MODAL } from '@redux/actions/type';

const localeReducer = (state = 'jp', action) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.data;
        default:
            return state;
    }
};

const modalReducer = (state = { isShow: false }, action) => {
    switch (action.type) {
        case SET_MODAL:
            return action.data;
        default:
            return state;
    }
};

export { localeReducer, modalReducer };
