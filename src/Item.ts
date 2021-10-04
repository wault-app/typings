import { CategoryType } from "./Category";

export type EncryptedItemType = {
    id: string;
    data: string;
    safeId: string;
};

export type AccountType = {
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

export type CreditCardType = {
    id: string;
    type: "credit-card";
    name: string;
    number?: string;
    cardholder?: string;
    expiry?: string;
    cvc?: string;
    description?: string;
    categories?: CategoryType[];
};

export type WalletType = {
    id: string;
    name: string;
    type: "wallet";
    blockchain: "ethereum";
    privateKey: string;
};

export type ItemType = AccountType | CreditCardType | WalletType;

export type AccountTypeWithoutID = Omit<AccountType, "id">;
export type CreditCardTypeWithoutID = Omit<CreditCardType, "id">;
export type WalletTypeWithoutID = Omit<WalletType, "id">;
export type ItemTypeWithoutID = AccountTypeWithoutID | CreditCardTypeWithoutID | WalletTypeWithoutID;

