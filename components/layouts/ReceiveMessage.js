import React from 'react';

export default function ReciveMessage(props) {
    const { message, time } = props;
    return (
        <div className="chat-reciver">
            <h4>{message}</h4>
            <p>{time}</p>
        </div>
    );
}
