import { routes } from '@utils/constants';
import { axios } from '@utils/plugins';

export const login = async (data) => {
    try {
        return await axios.post(routes.API.LOGIN.href, data);
    } catch (err) {
        throw err;
    }
};

export const getUserInfo = async (id) => {
    try {
        return await axios.get(routes.API.PROFILE.href, { params: { id: id } });
    } catch (err) {
        throw err;
    }
};

export const getTimetable = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_TIMETABLE.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getClassInfo = async (data) => {
    try {
        if (data) {
            return await axios.get(routes.API.GET_CLASS_INFO.href, { params: data });
        }
    } catch (error) {
        throw error;
    }
};

export const getSubjectInfor = async (id) => {
    try {
        if (data) {
            return await axios.get(`${routes.API.GET_SUBJECT_INFO.href}${id}`);
        }
    } catch (error) {
        throw error;
    }
};

export const getStudentInClass = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_STUDENT_IN_CLASS.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getMySubjectAndClass = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_SUBJECT_CLASS.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getChartBarData = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_ALL_SLOT.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getAllNotifications = async () => {
    try {
        return await axios.get(routes.API.GET_ALL_NOTIFICATION.href);
    } catch (error) {
        throw error;
    }
};

export const getNotification = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_NOTIFICATION.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getAllStudentInClass = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_ALL_STUDENT_IN_CLASS.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getClassByName = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_CLASS_BY_NAME.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const getSubjectByName = async (data) => {
    try {
        if (data) return await axios.get(routes.API.GET_SUBJECT_BY_NAME.href, { params: data });
    } catch (error) {
        throw error;
    }
};

export const uploadImage = async (data) => {
    try {
        if (data) return await axios.post(routes.API.UPLOAD_IMAGE_PROFILE.href, data);
    } catch (error) {
        throw error;
    }
};
