import { EncryptedItemType } from "./Item";
import { SafeType } from "./Safe";
import { UserType } from "./User";
export declare type RoleType = "OWNER" | "WRITER" | "READER";
export declare type KeycardType = {
    id: string;
    secret: string;
    safe: SafeType;
    role: RoleType;
};
export declare type RemoteKeycardType = {
    id: string;
    role: RoleType;
    user: UserType;
};
export declare type EncryptedSafeType = {
    id: string;
    name: string;
    description?: string;
    items: EncryptedItemType[];
    keycards: RemoteKeycardType[];
};
export declare type EncryptedKeycardType = {
    id: string;
    secret: string;
    safe: EncryptedSafeType;
    role: RoleType;
};
//# sourceMappingURL=Keycard.d.ts.map