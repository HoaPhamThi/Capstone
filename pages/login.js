import { useRouter } from 'next/router';
import { useState } from 'react';
import { images } from '@utils/constants';

import { routes } from '@utils/constants';
import { appConfig } from '@utils/configs';

import { LoginForm, ForgotPassword } from '@components/index';
import { useEffect } from 'react';

const LoginUserPage = () => {
    const [isLoginPage, setIsLoginPage] = useState(true);
    const handleChangePage = (value) => {
        setIsLoginPage(value);
    };
    return (
        <div className="pages__login">
            <div className="login-27">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 align-items-center">
                            {isLoginPage ? <LoginForm handleClick={handleChangePage} /> : <ForgotPassword handleClick={handleChangePage} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginUserPage;
