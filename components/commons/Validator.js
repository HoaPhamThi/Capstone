import { useState, useImperativeHandle, forwardRef } from 'react';

const Validator = forwardRef((props, ref) => {
    const [message, setMessage] = useState('');
    const { children, className, messageClassName, isShowRedBorder } = props;

    useImperativeHandle(ref, () => ({
        onValidateMessage: (mess) => {
            setMessage(mess);
        },
    }));

    return (
        <>
            <div className={`${message && isShowRedBorder ? 'components__validator-input' : ''} ${className}`}>{children}</div>

            {message ? (
                <div className={`bases__margin--top4 text-start bases__text--white bases__font--16 ${messageClassName}`}>{message}</div>
            ) : (
                <></>
            )}
        </>
    );
});

Validator.defaultProps = {
    className: '',
    messageClassName: '',
    message: '',
    isShowRedBorder: true,
};

export default Validator;
