import { useRouter } from 'next/router';
import { createRef, useState } from 'react';
// import { GoogleLogin } from 'react-google-login';

import Validator from '@components/commons/Validator';
import Input from '@components/commons/Input';
import Select from '@components/commons/Select';
import Button from '@components/commons/Button';

import { useDispatch } from 'react-redux';
import { fetchLogin, setModal } from '@redux/actions';
import { LOGIN } from '@redux/actions/type';

import { useTrans } from '@utils/hooks';
import { validateHelper } from '@utils/helpers';
import { enums, routes } from '@utils/constants';
import { appConfig } from '@utils/configs';

const LoginForm = (props) => {
    const { handleClick } = props;
    const trans = useTrans();
    const router = useRouter();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        email: '',
        password: '',
        role_id: 2,
    });
    const { email, password } = state;
    const emailValidatorRef = createRef();
    const passwordValidatorRef = createRef();
    const [isCheckbox, setIsCheckbox] = useState(true);

    const submitForm = async () => {
        let isValidate = true;

        emailValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage('Email is required');
            isValidate = false;
        } else if (!validateHelper.isEmail(email ?? '')) {
            emailValidatorRef?.current?.onValidateMessage('Email Invalid');
            isValidate = false;
        }

        passwordValidatorRef?.current?.onValidateMessage('');
        if (validateHelper.isEmpty(password ?? '')) {
            passwordValidatorRef?.current?.onValidateMessage('Password is required');
            isValidate = false;
        } else if ((password ?? '').length < 8) {
            passwordValidatorRef?.current?.onValidateMessage('Password Invalid');
            isValidate = false;
        }

        if (isValidate) {
            dispatch(
                await fetchLogin(state, (data) => {
                    localStorage.setItem(
                        'login',
                        JSON.stringify({ id: data?.user_id, email: data?.user_email, fullname: data?.user_name, image: data?.user_img }),
                    );
                    router.reload();
                }),
            );
        }
    };

    const handleOnChange = (field, value) => {
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleOnChangeRemember = (e) => {
        setIsCheckbox(!isCheckbox);
    };

    return (
        <div className="components__login form-section">
            <h1>Sign Into Your Account</h1>
            <div className="form-group clearfix">
                <Validator ref={emailValidatorRef}>
                    <Input
                        name="email"
                        type="text"
                        className="form-control"
                        value={email}
                        placeholder="Enter email"
                        onChange={(value) => handleOnChange('email', value)}
                    />
                </Validator>
            </div>
            <div className="form-group clearfix">
                <Validator ref={passwordValidatorRef}>
                    <Input
                        name="email"
                        type="password"
                        className="form-control"
                        value={password}
                        placeholder="Enter password"
                        onChange={(value) => handleOnChange('password', value)}
                    />
                </Validator>
            </div>
            <div className="checkbox form-group clearfix">
                <div className="form-check float-start">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberme"
                        checked={isCheckbox}
                        onChange={(e) => handleOnChangeRemember(e)}
                    />
                    <label className="form-check-label" htmlFor="rememberme">
                        Remember me
                    </label>
                </div>
                <a className="link-light float-end forgot-password" onClick={() => handleClick(false)}>
                    Forgot your password?
                </a>
            </div>
            <div className="form-group clearfix">
                <button className="btn btn-lg btn-primary btn-theme" onClick={submitForm}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
