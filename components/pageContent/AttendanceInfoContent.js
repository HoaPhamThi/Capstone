import React, { useEffect, useState } from 'react';
import { CustomDropdown } from '@components/index';
import { useRouter } from 'next/router';
import { images } from '@utils/constants';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch } from 'react-redux';
import { fetchStudentInClass } from '@redux/actions/api';

export default function AttendanceInfoContent(props) {
    const router = useRouter();
    const [listStudent, setListStudent] = useState([]);
    const { timetableID, slotStatus } = router.query;
    const dispatch = useDispatch();

    useEffect(async () => {
        const listStudent = dispatch(
            await fetchStudentInClass({ timetableID: timetableID }, (data) => {
                setListStudent(data?.data);
            }),
        );
    }, []);

    return (
        <div className="content-body components__attendance">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="event-draft-table">
                                    <div className="table-responsive custom-table">
                                        <table className="table student__info-table">
                                            <tbody>
                                                {listStudent?.map((item) => (
                                                    <tr>
                                                        <td>
                                                            <img src={images.AVT_DEFAULT} alt="user" className="student__info-img" />
                                                        </td>
                                                        <td className="name">{item?.student?.studentID}</td>
                                                        <td className="name">{item?.student?.fullname}</td>
                                                        <td className={'attendance__status'}>
                                                            {slotStatus == '2' ? (
                                                                <span className="attendance__status-not-yet">Not yet</span>
                                                            ) : (
                                                                <>
                                                                    {slotStatus == '1' ? (
                                                                        <>
                                                                            {item?.status === true ? (
                                                                                <span className="attendance__status-present">Present</span>
                                                                            ) : (
                                                                                <span className="attendance__status-not-yet">Not yet</span>
                                                                            )}
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            {item?.status === true ? (
                                                                                <span className="attendance__status-present">Present</span>
                                                                            ) : (
                                                                                <span className="attendance__status-absent">Absent</span>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </td>
                                                        {/* <td className="date">July 12, 2018</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
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
