import React from 'react';
import { PageLayout, Breadcrumb, CalendarContent } from '@components/index';

const CalendarPage = () => {
    return (
        <>
            <Breadcrumb title="Schedule" />
            <CalendarContent />
        </>
    );
};

export default CalendarPage;
