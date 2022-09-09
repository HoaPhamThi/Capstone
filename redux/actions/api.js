import { Dispatch } from 'redux';
import { AxiosError, AxiosResponse } from 'axios';

import { authHelper, apiHelper } from '@utils/helpers';

import { SET_LOADER, LOAD_USER } from '@redux/actions/type';

const setLoader = (data = false) => {
    return {
        type: SET_LOADER,
        data,
    };
};

export const fetchLogin = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.login(data);
            authHelper.setAccessToken(res.data.access_token ?? '');
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }

        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const loadUerInfor = (data) => {
    return {
        type: LOAD_USER,
        data,
    };
};

export const fetchTimetable = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getTimetable(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchClassInfo = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getClassInfo(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchSubjectInfo = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getSubjectInfor(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchStudentInClass = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getStudentInClass(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchMySubjectAndClass = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getMySubjectAndClass(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchChartBarData = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getChartBarData(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchAllNotifications = async (callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getAllNotifications();
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchNotification = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getNotification(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const fetchAllStudentInClass = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.getAllStudentInClass(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};

export const postImageProfile = async (data, callBack, isLoad = true) => {
    return async (dispatch) => {
        if (isLoad) {
            dispatch(setLoader(true));
        }
        try {
            const res = await apiHelper.uploadImage(data);
            if (callBack) {
                callBack(res?.data);
            }
        } catch (err) {
            if (!(err instanceof Error)) {
                const res = err;
                if (callBack) {
                    callBack(res?.data);
                }
            }
        }
        if (isLoad) {
            dispatch(setLoader(false));
        }
    };
};
