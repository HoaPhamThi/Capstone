import React, { useEffect, useState } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { setModal } from '@redux/actions';
import QRCodeComponent from '@components/layouts/QRCode.js';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassInfo, fetchTimetable } from '@redux/actions/api';

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map((k) => Views[k]);

const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'white',
        },
    });

const EventsCalendar = (props) => {
    const minTime = new Date();
    minTime.setHours(7, 0, 0);
    const maxTime = new Date();
    maxTime.setHours(17, 30, 0);
    const authState = useSelector((state) => state?.auth);
    const [listTimetable, setListTimetable] = useState([]);
    const [eventData, setEventData] = useState([]);
    const [eventClassID, setEventClassID] = useState('');
    const [classInfoState, setClassInfoState] = useState();

    const dispatch = useDispatch();

    useEffect(async () => {
        const timetableData = dispatch(
            await fetchTimetable({ instructorID: authState?.userID }, (data) => {
                setListTimetable(data?.list_timetable);
            }),
        );
    }, [authState?.userID]);

    useEffect(() => {
        if (listTimetable !== undefined) {
            const event = listTimetable.map((item) => {
                return {
                    id: item.id,
                    title: `${item?.subjectName} - ${item?.className}`,
                    classID: item?.classID,
                    start: new Date(Date.parse(item.timeStart)),
                    end: new Date(Date.parse(item.timeEnd)),
                    slotStatus: item?.slotStatus,
                    subjectID: item?.subjectID,
                };
            });
            setEventData(event);
        }
    }, [listTimetable]);

    useEffect(async () => {
        const classInfo = dispatch(
            await fetchClassInfo({ id: eventClassID }, (data) => {
                setClassInfoState(data?.data?.data);
            }),
        );
    }, [eventClassID]);

    const renderContentQRCode = (codeValue, classID, slotStatus, subjectID) => {
        return (
            <div className="d-flex justify-content-around">
                <QRCodeComponent codeValue={codeValue} classID={classID} slotStatus={slotStatus} subjectID={subjectID} />
            </div>
        );
    };

    const handleSelectEvent = (event) => {
        setEventClassID(event.classID);
        dispatch(
            setModal({
                isShow: true,
                title: 'Genarate QR Code',
                content: renderContentQRCode(event.id, event.classID, event.slotStatus, event.subjectID),
                isHideButtons: true,
            }),
        );
    };
    return (
        <Calendar
            localizer={localizer}
            events={eventData}
            min={minTime}
            max={maxTime}
            defaultView="week"
            startAccessor="start"
            endAccessor="end"
            style={{ height: `${100}vh`, minHeight: '350px' }}
            components={{
                timeSlotWrapper: ColoredDateCellWrapper,
            }}
            onSelectEvent={(e) => handleSelectEvent(e)}
        />
    );
};

export default EventsCalendar;
