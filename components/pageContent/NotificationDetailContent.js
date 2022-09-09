import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from 'next/router';
import { apiHelper } from '@utils/helpers';
import { useDispatch } from 'react-redux';
import { fetchNotification } from '@redux/actions';

export default function NotificationDetailContent() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { id } = router.query;
    const [notificationDetail, setNotificationDetail] = useState('');

    useEffect(async () => {
        const notification = dispatch(
            await fetchNotification({ id: id }, (data) => {
                setNotificationDetail(data);
            }),
        );
    }, []);

    return (
        <div className="content-body">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="event-msg-left">
                            <ul className="list-group">
                                <h3>{notificationDetail?.title}</h3>
                                {ReactHtmlParser(notificationDetail?.content)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
