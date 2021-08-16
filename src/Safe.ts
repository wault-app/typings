import { ItemType } from "./Item";
import { RemoteKeycardType } from "./Keycard";

export type SafeType = {
    id: string;
    name: string;
    description?: string;
    items: ItemType[];
    keycards: RemoteKeycardType[];
};