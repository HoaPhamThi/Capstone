import { SET_LOADER, LOGIN, LOAD_USER } from '@redux/actions/type';

const initialState = {
    userID: null,
    username: '',
    email: '',
    image: '',
};

const loaderReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOADER:
            return action.data;
        default:
            return state;
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...initialState,
                userID: action?.data?.id,
                email: action?.data?.email,
                username: action?.data?.fullname,
                image: action?.data?.image,
            };
        default:
            return state;
    }
};

export { loaderReducer, authReducer };
