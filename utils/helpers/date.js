import moment from 'moment';

export const formatDate = (date, format) => {
    return moment
        .utc(date)
        .local()
        .format(format);
};
