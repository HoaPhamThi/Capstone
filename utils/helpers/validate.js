import { regex } from '@utils/constants';

export const isEmpty = (value) => {
    if (!value) {
        return true;
    }

    return false;
};

export const isEmail = (value) => {
    if (regex.RULE.EMAIL.test(value)) {
        return true;
    }

    return false;
};

export const isNumber = (value) => {
    if (regex.RULE.NUMBER.test(value)) {
        return true;
    }

    return false;
};
