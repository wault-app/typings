import { DeviceType } from "./Device";
import { UserType } from "./User";

export type SessionTokenType = UserType & {
    device: DeviceType;
};