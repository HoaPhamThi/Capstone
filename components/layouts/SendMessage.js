import React from 'react';

export default function SendMessage(props) {
    const { message, time } = props;
    return (
        <div className="chat-sender">
            <h4>{message}</h4>
            <p>{time}</p>
        </div>
    );
}
