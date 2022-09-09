import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { useToggle } from '@utils/hooks';
import { images } from '@utils/constants';
import { authHelper } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { loadUerInfor } from '@redux/actions';

const Header = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state?.auth);
    const { handleClickMenu } = props;

    const handleOnClickLogout = () => {
        authHelper.logOut();
        router.reload();
    };

    useEffect(async () => {
        const data = localStorage.getItem('login');
        await dispatch(loadUerInfor(JSON.parse(data)));
    }, []);

    console.log(authState);

    return (
        <>
            <Head>
                <title>Check Attendance System</title>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <div className="header">
                <div className="container">
                    <div className="row justify-content-between py-2">
                        <div className="col-lg-2 col-sm-6 mb-4 mb-lg-0">
                            <div className="logo">{/* <img src={images.IMG_LOGO} alt="logo" /> */}</div>

                            {/* <button className="btn-menu" >
                                <FaBars className="" />
                            </button> */}
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6">
                            <div className="header-user-profile">
                                <Dropdown className="custom-dropdown">
                                    <div className="menu-item d-inline-block">
                                        <p>{authState?.username}</p>
                                    </div>
                                    <Dropdown.Toggle variant="success" as="div" className="d-inline-block wrap-avt">
                                        <img src={authState?.image == '' ? images.AVT_MALE : authState?.image} alt="user" />
                                    </Dropdown.Toggle>
                                    {/* <Dropdown.Menu className="dropdown-menu-right">
                                        <Dropdown.Item
                                            onClick={() => {
                                                router.push(
                                                    {
                                                        pathname: '/profile',
                                                    },
                                                    undefined,
                                                    { scroll: false },
                                                )
                                            }}>My Profile</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Event Created</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Event Attended</Dropdown.Item>
                                        <Dropdown.Item href="#/action-5">Elements</Dropdown.Item>
                                        <Dropdown.Item onClick={handleOnClickLogout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu> */}
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
