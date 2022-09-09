import React from 'react';
import { images } from '@utils/constants';
import { CustomDropdown, SingleMessageMember, ChatMember } from '@components/index';

export default function MessageContent() {
    return (
        <div className="content-body">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-9">
                        <div className="event-msg-left">
                            <ul className="list-group">
                                <SingleMessageMember
                                    image={images.AVT_FEMALE}
                                    name="John Doe"
                                    message="Hey, how are you!"
                                    time="07.50 PM"
                                    unreadMessage="5"
                                />
                                <SingleMessageMember
                                    image={images.AVT_MALE}
                                    name="Jassica"
                                    message="Sed elementum libero mattis velit pulvinar"
                                    time="04.50 PM"
                                />
                                <SingleMessageMember
                                    image={images.AVT_FEMALE}
                                    name="Anamika"
                                    message="Sed elementum libero mattis velit pulvinar"
                                    time="08.10 PM"
                                />
                                <SingleMessageMember image={images.AVT_MALE} name="Rock" message="Hey, how are you!" time="04.25 PM" />
                                <SingleMessageMember
                                    image={images.AVT_MALE}
                                    name="Andy William"
                                    message="Sed elementum libero mattis velit pulvinar"
                                    time="02.25 PM"
                                />
                                <SingleMessageMember
                                    image={images.AVT_DEFAULT}
                                    name="Akash"
                                    message="Cras sed orci sodales enim porttitor feugiat"
                                    time="09.40 PM"
                                />
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 left-line">
                        <div className="event-sideber m-l-15">
                            <h4>QUICK CHAT</h4>
                            <ChatMember name="John Doe" image={images.AVT_FEMALE} status="online" />
                            <ChatMember name="Jassica" image={images.AVT_MALE} status="online" />
                            <ChatMember name="Anamika" image={images.AVT_FEMALE} status="online" />
                            <ChatMember name="Rock" image={images.AVT_MALE} status="online" />
                            <ChatMember name="Johnson Smith" image={images.AVT_MALE} status="online" />
                            <ChatMember name="Arrohi" image={images.AVT_MALE} status="online" />
                            <ChatMember name="Any William" image={images.AVT_MALE} status="online" />
                            <ChatMember name="Akash" image={images.AVT_DEFAULT} status="online" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
