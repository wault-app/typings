export type UserType = {
    id: string;
    username: string;
    email: string;
    icon?: IconType;
};

export type IconType = {
    type: "EMOJI" | "IMAGE";
    value: string;
};