// for client
const HOME_PAGE = {
    href: '/',
};
const LOGIN_PAGE = {
    href: '/login',
};
const FORGOT_PASSWORD_PAGE = {
    href: '/forgot-password',
};
const NOT_FOUND_PAGE = {
    href: '/404',
};

export const CLIENT = {
    HOME: HOME_PAGE,
    LOGIN: LOGIN_PAGE,
    NOT_FOUND: NOT_FOUND_PAGE,
    FORGOT_PASSWORD: FORGOT_PASSWORD_PAGE,
};


// API

const LOGIN_API = {
    href: 'instructor/login',
};
const PROFILE_API = {
    href: 'instructor/get/',
};
const GET_TIMETABLE = {
    href: 'timetable/getTimetable',
};
const GET_CLASS_INFO = {
    href: 'class/getClassInfo/',
};
const GET_SUBJECT_INFO = {
    href: 'subject/get/',
};
const GET_STUDENT_IN_CLASS = {
    href: 'attendance/getStudentInClass',
};
const GET_SUBJECT_CLASS = {
    href: 'instructor/getMySubjectClass',
};
const GET_ALL_SLOT = {
    href: 'timetable/getAllSlot',
}
const GET_ALL_NOTIFICATION = {
    href: 'notification/getAll',
}
const GET_NOTIFICATION = {
    href: 'notification/get',
}
const GET_ALL_STUDENT_IN_CLASS = {
    href: 'student/getStudentInClass',
}
const GET_CLASS_BY_NAME = {
    href: 'class/getClassByName',
}
const GET_SUBJECT_BY_NAME = {
    href: 'subject/getSubjectByName',
}
const UPLOAD_IMAGE_PROFILE = {
    href: 'instructor/updateInstructorImage'
}
export const API = {
    LOGIN: LOGIN_API,
    PROFILE: PROFILE_API,
    GET_TIMETABLE: GET_TIMETABLE,
    GET_CLASS_INFO: GET_CLASS_INFO,
    GET_SUBJECT_INFO: GET_SUBJECT_INFO,
    GET_STUDENT_IN_CLASS: GET_STUDENT_IN_CLASS,
    GET_SUBJECT_CLASS: GET_SUBJECT_CLASS,
    GET_ALL_SLOT: GET_ALL_SLOT,
    GET_ALL_NOTIFICATION: GET_ALL_NOTIFICATION,
    GET_NOTIFICATION: GET_NOTIFICATION,
    GET_ALL_STUDENT_IN_CLASS: GET_ALL_STUDENT_IN_CLASS,
    GET_CLASS_BY_NAME: GET_CLASS_BY_NAME,
    GET_SUBJECT_BY_NAME: GET_SUBJECT_BY_NAME,
    UPLOAD_IMAGE_PROFILE: UPLOAD_IMAGE_PROFILE
};
