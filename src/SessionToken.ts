import { DeviceType } from "./Device";
import { UserType } from "./User";

type SessionTokenType = UserType & {
    device: DeviceType;
};