import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { authHelper, apiHelper } from '@utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Button } from '@components/index';
import { fetchMySubjectAndClass } from '@redux/actions/api';

const MyClassContent = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state?.auth);
    const [listData, setListData] = useState();

    useEffect(async () => {
        const listData = dispatch(
            await fetchMySubjectAndClass({ id: authState.userID }, (data) => {
                setListData(data?.data);
            }),
        );
    }, [authState.userID]);

    const hanldeClickViewClass = async (classname) => {
        const classData = await apiHelper.getClassByName({ name: classname });
        const classID = classData?.data?.data[0]?._id;

        router.push(
            {
                pathname: '/class-info',
                query: {
                    classID: classID,
                },
            },
            undefined,
            { scroll: false },
        );
    };

    const hanldeClickViewChart = async (classname, subjectname) => {
        const classData = await apiHelper.getClassByName({ name: classname });
        const classID = classData?.data?.data[0]?._id;

        const subjectData = await apiHelper.getSubjectByName({ name: subjectname });
        const subjectID = subjectData?.data?.data[0]?._id;

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
    };

    return (
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="components__myclass">
                            <Accordion defaultActiveKey="0">
                                {listData?.map((item, index) => {
                                    return (
                                        <Accordion.Item eventKey={index} key={index}>
                                            <Accordion.Header>{item.subjectName}</Accordion.Header>
                                            {item?.listClass?.map((itemClass, index) => {
                                                return (
                                                    <Accordion.Body
                                                        key={index}
                                                        className="d-flex align-items-center justify-content-between">
                                                        {itemClass}
                                                        <div className="d-flex ">
                                                            <Button
                                                                className="myclass__btn mx-4"
                                                                buttonText="View class"
                                                                onClick={() => hanldeClickViewClass(itemClass)}
                                                            />
                                                            <Button
                                                                className="myclass__btn"
                                                                buttonText="View chart"
                                                                onClick={() => hanldeClickViewChart(itemClass, item.subjectName)}
                                                            />
                                                        </div>
                                                    </Accordion.Body>
                                                );
                                            })}
                                        </Accordion.Item>
                                    );
                                })}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassContent;
