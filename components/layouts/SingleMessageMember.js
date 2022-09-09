import React from 'react';

export default function SingleMessageMember(props) {
    const { image, name, message, time, unreadMessage } = props;
    return (
        <div className="list-group-item msg-single">
            <div className="media">
                <div className="d-flex align-items-center mb-4">
                    <img className="mr-3 img-fluid" src={image} alt={name} />
                    <div className="media-body mx-4">
                        <h3 className="mt-0">{name}</h3>
                    </div>
                </div>
                <p>{message}</p>
                <div className="time">
                    <h5>{time}</h5>
                    {unreadMessage ? <span className="bg-danger">{unreadMessage}</span> : null}
                </div>
            </div>
        </div>
    );
}
