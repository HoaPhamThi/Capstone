import React from 'react';
import { EventCard } from '@components/index';
import { images } from '@utils/constants';

export default function ActiveEventsContent() {
    return (
        <div className="content-body">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <EventCard
                                    author="John Duo"
                                    author_thumb={images.IMG_EVENT_HEAD}
                                    event_name="Ecommerce"
                                    event_date="15 March 2021"
                                    event_location="London"
                                    tickets_date="5, 21"
                                    event_fee="$250"
                                />
                            </div>
                            <div className="col-lg-6">
                                <EventCard
                                    author="Rocky"
                                    author_thumb={images.IMG_EVENT_HEAD}
                                    event_name="Ecommerce"
                                    event_date="15 March 2021"
                                    event_location="London"
                                    tickets_date="2, 20"
                                    event_fee="Free"
                                />
                            </div>
                            <div className="col-lg-6">
                                <EventCard
                                    author="Arif Khan"
                                    author_thumb={images.IMG_EVENT_HEAD}
                                    event_name="Ecommerce"
                                    event_date="15 March 2021"
                                    event_location="London"
                                    tickets_date="3, 18"
                                    event_fee="$125"
                                />
                            </div>
                            <div className="col-lg-6">
                                <EventCard
                                    author="Abraham"
                                    author_thumb={images.IMG_EVENT_HEAD}
                                    event_name="Ecommerce"
                                    event_date="15 March 2021"
                                    event_location="London"
                                    tickets_date="6, 19"
                                    event_fee="$540"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
