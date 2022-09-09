import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './Modal';
import Loader from './Loader';
import Header from './Header';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { setLocale, setModal } from '@redux/actions';
import useSwitch from '../../utils/hooks/useSwitch';

const App = (props) => {
    const { children } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        reloadKey: 0,
        historyPathname: router.pathname,
    });
    const { reloadKey } = state;
    const { locale, pathname } = router;
    const [showSwitch, controlSwitch] = useSwitch();

    useEffect(() => {
        window.addEventListener('popstate', onBackButtonEvent);

        return () => {
            window.removeEventListener('popstate', onBackButtonEvent);
        };
    }, []);

    useEffect(() => {
        handleScrollToTop();
        setState((prevState) => ({
            ...prevState,
            historyPathname: pathname,
        }));
    }, [pathname]);

    useEffect(() => {
        dispatch(setLocale(locale));
    }, [locale]);

    const onBackButtonEvent = () => {
        dispatch(setModal({ isShow: false }));
        handleScrollToTop();
    };

    const handleScrollToTop = () => {
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => window.scrollTo(0, 0), 5);
    };

    const [rtl, setRtl] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);
    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    const handleRtlChange = (checked) => {
        setRtl(checked);
        setLocale(checked ? 'ar' : 'en');
    };
    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div key={reloadKey} className="components__app">
            <Loader />
            <Modal />

            <div className="d-flex" style={{ minHeight: '100vh' }}>
                <div className={`${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
                    <NavMenu
                        image={image}
                        collapsed={collapsed}
                        rtl={rtl}
                        toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                        showMenu={showSwitch}
                    />
                </div>
                <div className="main">
                    <Header handleClickMenu={handleCollapsedChange} showMenu={showSwitch} />
                    {children}
                    {/* <Footer /> */}
                </div>
            </div>
        </div>
    );
};

export default App;
