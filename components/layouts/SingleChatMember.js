import React from 'react';

export default function SingleChatMember(props) {
    const { img, name, message, time, unreadMessage } = props;
    return (
        <li className="list-group-item msg-single">
            <div className="media">
                <img className="mr-3 img-fluid" src={img} alt={name} />
                <div className="media-body">
                    <h3 className="mt-0">{name}</h3>
                    <p>{message}</p>
                </div>
                <div className="time">
                    <h5>{time}</h5>
                    {unreadMessage ? <span className="bg-danger">{unreadMessage}</span> : null}
                </div>
            </div>
        </li>
    );
}
