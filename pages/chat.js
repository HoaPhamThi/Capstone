import React from 'react';
import { PageLayout, Breadcrumb, ChatContent } from '@components/index';

const ChatPage = () => {
    return (
        <>
            <Breadcrumb title="Chat" />
            <ChatContent />
        </>
    );
};

export default ChatPage;
