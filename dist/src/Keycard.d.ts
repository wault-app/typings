import { EncryptedItemType } from "./Item";
import { SafeType } from "./Safe";
import { RemoteUserType } from "./User";
export declare type RoleType = "OWNER" | "WRITER" | "READER";
export declare type KeycardType = {
    id: string;
    safe: SafeType;
    role: RoleType;
};
export declare type RemoteKeycardType = {
    id: string;
    role: RoleType;
    user: RemoteUserType;
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
    safe: EncryptedSafeType;
    role: RoleType;
};
//# sourceMappingURL=Keycard.d.ts.map