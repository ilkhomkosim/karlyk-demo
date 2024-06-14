import { useEffect, useState } from "react";

const useDeviceDetect = (): string => {
    const [device, setDevice] = useState<string>("desktop");

    useEffect(() => {
        const useAgent = navigator.userAgent;
        const isMobile = 
            /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                useAgent
            );
            setDevice(isMobile ? "mobile" : "desktop");
    }, [device]);

    return device;
};

export default useDeviceDetect;