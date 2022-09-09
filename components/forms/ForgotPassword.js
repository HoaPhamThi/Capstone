import { useRouter } from 'next/router';
import { routes } from '@utils/constants';

const ForgotPasswordForm = (props) => {
    const { handleClick } = props;
    const router = useRouter();

    return (
        <div className="components__forgot-password form-section">
            <h1>Recover Your Password</h1>
            <form action="#" method="GET">
                <div className="form-group clearfix">
                    <input name="email" type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-lg btn-primary btn-theme">
                        Send Me Email
                    </button>
                </div>
                <div className="clearfix"></div>
            </form>
            <p>
                Already a member?
                <a onClick={() => handleClick(true)} className="thembo">
                    {' '}
                    Login here
                </a>
            </p>
        </div>
    );
};

export default ForgotPasswordForm;
