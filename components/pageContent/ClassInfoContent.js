import React, { useEffect, useState } from 'react';
import { CustomDropdown } from '@components/index';
import { useRouter } from 'next/router';
import { images } from '@utils/constants';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch } from 'react-redux';
import { fetchAllStudentInClass } from '@redux/actions';

export default function ClassInfoContent(props) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [listStudent, setListStudent] = useState([]);
    const { classID } = router.query;

    useEffect(async () => {
        const listStudent = dispatch(
            await fetchAllStudentInClass({ classID: classID }, (data) => {
                setListStudent(data?.listStudent);
            }),
        );
    }, [classID]);

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
                                                            <img
                                                                src={(item?.image = '' ? item.image : images.AVT_DEFAULT)}
                                                                alt="user"
                                                                className="student__info-img"
                                                            />
                                                        </td>
                                                        <td className="name">{item?.studentID}</td>
                                                        <td className="name">{item?.fullname}</td>
                                                        <td className="name">{item?.phone}</td>
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
