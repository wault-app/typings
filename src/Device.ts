export type DeviceType = {
    id: string;
    name: string;
    loggedInAt: string;
    type: "MOBILE" | "BROWSER" | "DESKTOP" | "CLI";
};