import { CategoryType } from "./Category";

export type PlatformType = {
    /**
     * Name of the platform (e.g.: Discord)
     */
    name: string;
    categories: CategoryType[];
    /**
     * Background color for icon in hex string (e.g.: #00ff00)
     */
    color?: string;
    /**
     * Url path to an SVG file
     */
    icon?: string;
};