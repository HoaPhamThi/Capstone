import React from 'react';
import { PageLayout, AttendanceInfoContent, Breadcrumb } from '@components/index';

const Notification = () => {
    return (
        <>
            <Breadcrumb title="Attendance" />
            <AttendanceInfoContent />
        </>
    );
};

export default Notification;
