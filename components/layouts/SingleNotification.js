import React from 'react';
import { useRouter } from 'next/router';

export default function SingleNotification(props) {
    const { unreadMessage, notification } = props;
    const router = useRouter();

    const handleOnClickDetail = (id) => {
        console.log('notification id', id);
        router.push(
            {
                pathname: '/notification-detail',
                query: {
                    id: id,
                },
            },
            undefined,
            { scroll: false },
        );
    };

    return (
        <div className="list-group-item msg-single cursor-pointer" onClick={() => handleOnClickDetail(notification._id)}>
            <div className="media">
                <div className="d-flex align-items-center">
                    <div className="media-body">
                        <h3 className="mt-0">{notification.title}</h3>
                    </div>
                </div>
                {/* <p>{notification.content}</p> */}
                <div className="time">
                    <h5>{notification.postDate}</h5>
                    {unreadMessage ? <span className="bg-danger">{unreadMessage}</span> : null}
                </div>
            </div>
        </div>
    );
}
