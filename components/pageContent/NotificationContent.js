import React, { useEffect, useState } from 'react';
import { images } from '@utils/constants';
import { SingleNotification } from '@components/index';
import { apiHelper } from '@utils/helpers';
import { useDispatch } from 'react-redux';
import { fetchAllNotifications } from '@redux/actions/api';

export default function NotificationContent() {
    const dispatch = useDispatch();
    const [listNotifications, setListNotifications] = useState([]);

    useEffect(async () => {
        const listNotifications = dispatch(
            await fetchAllNotifications((data) => {
                setListNotifications(data);
            }),
        );
    }, []);

    console.log('listNotifications', listNotifications);
    return (
        <div className="content-body">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="event-msg-left">
                            <ul className="list-group">
                                {listNotifications?.map((notification, index) => {
                                    return <SingleNotification key={index} notification={notification} unreadMessage="" />;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
