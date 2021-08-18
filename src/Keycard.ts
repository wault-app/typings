import { EncryptedItemType } from "./Item";
import { SafeType } from "./Safe";
import { UserType } from "./User";

export type RoleType = "OWNER" | "WRITER" | "READER";

export type KeycardType = {
    id: string;
    secret: string;
    safe: SafeType;
    role: RoleType;
};

export type RemoteKeycardType = {
    id: string;
    role: RoleType;
    user: UserType;
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
    secret: string;
    safe: EncryptedSafeType;
    role: RoleType;
};
