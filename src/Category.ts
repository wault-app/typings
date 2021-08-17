
const categories = {
    work: {
        name: "Work",
    },
    communication: {
        name: "Communication",
    },
    games: {
        name: "Games",
    },
    financial: {
        name: "Financial",
    },
    social: {
        name: "Social"
    },
    entertainment: {
        name: "Entartainment",
    },
    shopping: {
        name: "Shopping",
    },
    education: {
        name: "Education",
    },
} as const;

export type CategoryType = keyof typeof categories;

export class Category {
    public static get(category: CategoryType) {
        return categories[category];
    }

    public static getAll() {
        return categories;
    }
}