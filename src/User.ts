import { RemoteDeviceType } from "./Device";

export type UserType = {
    id: string;
    username: string;
    email: string;
    icon?: IconType;
};

export type RemoteUserType = {
    id: string;
    email: string;
    username: string;
    icon: IconType;
    devices: RemoteDeviceType;
};

export type IconType = {
    type: "EMOJI" | "IMAGE";
    value: string;
};