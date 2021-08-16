export type DeviceType = {
    id: string;
    name: string;
    loggedInAt: string;
    rsaKey: string;
    type: "MOBILE" | "BROWSER" | "DESKTOP" | "CLI";
};

export type RemoteDeviceType = {
    id: string;
    rsaKey: string;
};