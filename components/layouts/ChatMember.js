import React from 'react';

export default function ChatMember(props) {
    const { image, name, status } = props;
    return (
        <div className="media">
            <div className="media-img">
                <img className="mr-3 img-fluid" src={image} alt={name} />
                <span className="position-absolute h-10px w-10px bg-danger rounded-circle bottom-3 left-40 border-white-2"></span>
            </div>
            <div className="media-body">
                <h3 className="mb-0">{name}</h3>
                <p>{status}</p>
            </div>
        </div>
    );
}
