import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authHelper } from '@utils/helpers';
import { images } from '@utils/constants';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart, FaWhmcs, FaRocketchat, FaEnvelope } from 'react-icons/fa';

export default function NavMenu(props) {
    const router = useRouter();
    const [tabletView, setTabletView] = useState(false);
    const controlMenu = () => {
        if (window.innerWidth < 992) {
            setTabletView(true);
        } else {
            setTabletView(false);
        }
        window.addEventListener('resize', controlMenu);
    };

    useEffect(() => {
        controlMenu();
    }, [tabletView]);

    const handleOnClickLogout = () => {
        authHelper.logOut();
        router.reload();
    };

    const { image, collapsed, rtl, toggled, handleToggleSidebar, handleCollapsedChange } = props;
    return (
        <ProSidebar rtl={rtl} collapsed={collapsed} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
            <SidebarHeader>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaList />} onClick={handleCollapsedChange}>
                        Menu
                    </MenuItem>
                </Menu>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        // suffix={<span className="badge red">new</span>}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/',
                                },
                                undefined,
                                { scroll: false },
                            );
                        }}>
                        Home
                    </MenuItem>
                    <MenuItem
                        icon={<FaGem />}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/myclass',
                                },
                                undefined,
                                { scroll: false },
                            );
                        }}>
                        My Class
                    </MenuItem>
                </Menu>
                <Menu iconShape="circle">
                    {/* <SubMenu suffix={<span className="badge yellow">3</span>} title="Messages" icon={<FaRegLaughWink />}> */}
                    <MenuItem
                        // suffix={<span className="badge yellow">3</span>}
                        icon={<FaRocketchat />}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/message',
                                },
                                undefined,
                                { scroll: false },
                            );
                        }}>
                        Message
                    </MenuItem>
                    <MenuItem
                        // suffix={<span className="badge yellow">3</span>}
                        icon={<FaEnvelope />}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/notification',
                                },
                                undefined,
                                { scroll: false },
                            );
                        }}>
                        Notifications
                    </MenuItem>
                    {/* <MenuItem
                            onClick={() => {
                                router.push(
                                    {
                                        pathname: '/chat',
                                    },
                                    undefined,
                                    { scroll: false },
                                );
                            }}>
                            Chat
                        </MenuItem> */}
                    {/* </SubMenu> */}
                    <MenuItem
                        icon={<FaHeart />}
                        onClick={() => {
                            router.push(
                                {
                                    pathname: '/',
                                },
                                undefined,
                                { scroll: false },
                            );
                        }}>
                        Schedule
                    </MenuItem>
                    <SubMenu title="Settings" icon={<FaWhmcs />}>
                        <MenuItem
                            onClick={() => {
                                router.push(
                                    {
                                        pathname: '/profile',
                                    },
                                    undefined,
                                    { scroll: false },
                                );
                            }}>
                            My Profile
                        </MenuItem>
                        <MenuItem onClick={handleOnClickLogout}>Logout</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                {/* <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}>
                    <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer">
                        <FaGithub />
                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>viewSource</span>
                    </a>
                </div> */}
            </SidebarFooter>
        </ProSidebar>
    );
}
