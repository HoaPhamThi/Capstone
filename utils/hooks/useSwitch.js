import { useState } from 'react';

const useSwitch = () => {
    const [showSwitch, setShowSwitch] = useState(false);
    const controlSwitch = () => {
        setShowSwitch(!showSwitch);
    };
    return [showSwitch, controlSwitch];
};

export default useSwitch;
