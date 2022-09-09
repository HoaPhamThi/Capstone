import React from 'react';
import EventsCalendar from '../layouts/EventsCalendar';
import { Modal } from 'react-bootstrap';
import { useToggle } from '@utils/hooks';
export default function CalendarContent() {
    const [show, handleShow, handleClose] = useToggle();
    return (
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card-box events-wrapper">
                                            <EventsCalendar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
