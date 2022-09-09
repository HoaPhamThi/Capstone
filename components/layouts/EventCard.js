import React from 'react';
import { CustomDropdown } from '@components/index';
import { images } from '@utils/constants';

export default function EventCard(props) {
    const { author, author_thumb, event_name, event_date, event_location, tickets_date, event_fee } = props;
    return (
        <div className="card event-card">
            <div className="card-header">
                <div className="media">
                    <img className="mr-3 img-fluid" src={author_thumb} alt={author} />
                    <div className="media-body">
                        <h3 className="mt-0">By {author}</h3>
                        <p>5 min ago</p>
                    </div>
                    <CustomDropdown>
                        <a className="dropdown-item" href="#">
                            Option 1
                        </a>
                        <a className="dropdown-item" href="#">
                            Option 2
                        </a>
                        <a className="dropdown-item" href="#">
                            Option 3
                        </a>
                    </CustomDropdown>
                </div>
            </div>
            <div className="event-card-img">
                <img className="img-fluid" src={images.IMG_EVENT} alt="placeholder image" />
                <h4>{event_name}</h4>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-auto">
                        <h5>Date</h5>
                        <p>{event_date}</p>
                    </div>
                    <div className="col-auto">
                        <h5>Location</h5>
                        <p>{event_location}</p>
                    </div>
                    <div className="col-auto">
                        <h5>Tickets</h5>
                        <p>Avilable {tickets_date}</p>
                    </div>
                </div>
            </div>
            <div className="card-sponsor">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <h4>Sponsor by</h4>
                        <div className="card-sponsor-img">
                            <a href="#">
                                <img className="img-fluid" src={images.IMG_CARD_FOOT1} alt="placeholder image" />
                            </a>
                            <a href="#">
                                <img className="img-fluid" src={images.IMG_CARD_FOOT2} alt="placeholder image" />
                            </a>
                            <a href="#">
                                <img className="img-fluid" src={images.IMG_CARD_FOOT3} alt="placeholder image" />
                            </a>
                            <a href="#">
                                <img className="img-fluid" src={images.IMG_CARD_FOOT4} alt="placeholder image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-auto">
                        <p>{event_fee}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <ul>
                    <li>
                        <a href="#">
                            {' '}
                            <i className="fa fa-heart"></i>126{' '}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            {' '}
                            <i className="fa fa-comment"></i>03{' '}
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-sign-out"></i>
                        </a>
                    </li>
                </ul>
                <div className="pull-right">
                    <a href="#">
                        {' '}
                        <i className="fa fa-bar-chart"></i>Insights
                    </a>
                </div>
            </div>
        </div>
    );
}
