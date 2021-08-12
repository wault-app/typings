import { EncryptedItemType } from "./Item";
import { SafeType } from "./Safe";

export type RoleType = "OWNER" | "WRITER" | "READER";

export type KeycardType = {
    id: string;
    safe: SafeType;
    role: RoleType;
};

export type EncryptedSafeType = {
    id: string;
    name: string;
    items: EncryptedItemType[];
};

export type EncryptedKeycardType = {
    id: string;
    safe: EncryptedSafeType;
    role: RoleType;
};
