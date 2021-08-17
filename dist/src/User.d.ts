import { RemoteDeviceType } from "./Device";
export declare type UserType = {
    id: string;
    username: string;
    email: string;
    icon?: IconType;
};
export declare type RemoteUserType = {
    id: string;
    email: string;
    username: string;
    icon: IconType;
    devices: RemoteDeviceType;
};
export declare type IconType = {
    type: "EMOJI" | "IMAGE";
    value: string;
};
//# sourceMappingURL=User.d.ts.map