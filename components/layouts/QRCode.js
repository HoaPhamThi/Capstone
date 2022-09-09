import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setModal } from '@redux/actions';
import Button from '../commons/Button';

const QRCodeComponent = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { codeValue, classID, slotStatus, subjectID } = props;

    return (
        <div className="components__QRCode">
            <div className="d-flex justify-content-between my-3">
                <Button
                    className="QRCode__btn QRCode__btn-view-attendance"
                    buttonText="View Attendance"
                    style={{ display: 'block' }}
                    onClick={() => {
                        dispatch(
                            setModal({
                                isShow: false,
                            }),
                        );
                        router.push(
                            {
                                pathname: '/attendance-info',
                                query: {
                                    classID: classID,
                                    timetableID: codeValue,
                                    slotStatus: slotStatus,
                                },
                            },
                            undefined,
                            { scroll: false },
                        );
                    }}></Button>
                <Button
                    className="QRCode__btn QRCode__btn-view-chart"
                    buttonText="View Chart"
                    style={{ display: 'block' }}
                    onClick={() => {
                        dispatch(
                            setModal({
                                isShow: false,
                            }),
                        );
                        router.push(
                            {
                                pathname: '/bar-chart',
                                query: {
                                    classID: classID,
                                    subjectID: subjectID,
                                },
                            },
                            undefined,
                            { scroll: false },
                        );
                    }}></Button>
            </div>
            {slotStatus === 1 ? <QRCode value={codeValue} size={350} /> : <></>}
        </div>
    );
};
export default QRCodeComponent;
