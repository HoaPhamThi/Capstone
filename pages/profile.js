import React from 'react';
import { PageLayout, ProfileContent, Breadcrumb } from '@components/index';

const Profile = () => {
    return (
        <>
            <Breadcrumb title="Profile" />
            <ProfileContent />
        </>
    );
};

export default Profile;
