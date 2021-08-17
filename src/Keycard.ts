import { EncryptedItemType } from "./Item";
import { SafeType } from "./Safe";
import { RemoteUserType } from "./User";

export type RoleType = "OWNER" | "WRITER" | "READER";

export type KeycardType = {
    id: string;
    safe: SafeType;
    role: RoleType;
};

export type RemoteKeycardType = {
    id: string;
    role: RoleType;
    user: RemoteUserType;
};

export type EncryptedSafeType = {
    id: string;
    name: string;
    description?: string;
    items: EncryptedItemType[];
    keycards: RemoteKeycardType[];
};

export type EncryptedKeycardType = {
    id: string;
    safe: EncryptedSafeType;
    role: RoleType;
};
