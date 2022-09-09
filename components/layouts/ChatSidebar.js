import React from 'react';
import { Field, Form, Formik } from 'formik';
import SingleChatMember from './SingleChatMember';
import { images } from '@utils/constants';

export default function ChatSidebar() {
    return (
        <div className="event-msg-left">
            <ul className="list-group">
                <li className="list-group-item msg-single ">
                    <div className="event-sideber-search">
                        <Formik
                            initialValues={{ search_text: '' }}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    console.log(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}>
                            {() => (
                                <Form>
                                    <Field type="text" name="search_text" placeholder="Search..." className="form-control" required />
                                    <button type="submit" className="border-0">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </li>
                <SingleChatMember
                    img={images.IMG_AUTHOR}
                    name="Johnson"
                    message="Anim esse cubilia pulvinar alias ante"
                    time="07.50 PM"
                    unreadMessage="4"
                />
                <SingleChatMember
                    img={images.IMG_AUTHOR}
                    name="Anamika"
                    message="Cras sed orci sodales esse cubilia pulvinar"
                    time="07.50 PM"
                />
                <SingleChatMember img={images.IMG_AUTHOR} name="Rock" message="Hey, how are you!" time="04.50 PM" />
                <SingleChatMember img={images.IMG_AUTHOR} name="Arrohi" message="Cras sed orci sodales sed orci sodales" time="07.50 PM" />
                <SingleChatMember
                    img={images.IMG_AUTHOR}
                    name="Andy William"
                    message="Sed elementum libero sodales sed orci sodales"
                    time="07.50 PM"
                />
                <SingleChatMember img={images.IMG_AUTHOR} name="Akash" message="Cras sed sodales enim sed orci sodales" time="08.20 PM" />
            </ul>
        </div>
    );
}
