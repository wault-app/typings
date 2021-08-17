import { CategoryType } from "./Category";
export declare type EncryptedItemType = {
    id: string;
    data: string;
    safeId: string;
};
export declare type AccountType = {
    id: string;
    type: "account";
    platform: string;
    username?: string;
    password?: string;
    description?: string;
    categories?: CategoryType[];
    url?: string;
    totp?: string;
};
export declare type CreditCardType = {
    id: string;
    type: "credit-card";
    name: string;
    number?: string;
    cardholder?: string;
    expiry?: string;
    cvc?: string;
    description?: string;
};
export declare type ItemType = AccountType | CreditCardType;
export declare type AccountTypeWithoutID = Omit<AccountType, "id">;
export declare type CreditCardTypeWithoutID = Omit<CreditCardType, "id">;
export declare type ItemTypeWithoutID = AccountTypeWithoutID | CreditCardTypeWithoutID;
//# sourceMappingURL=Item.d.ts.map