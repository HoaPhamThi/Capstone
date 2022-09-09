import React from 'react';
import { PageLayout, Breadcrumb, ActiveEventsContent } from '@components/index';

const ActiveEvents = () => {
    return (
        <>
            <Breadcrumb title="Active Events" />
            <ActiveEventsContent />
        </>
    );
};

export default ActiveEvents;
