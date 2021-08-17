"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
var categories = {
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
};
var Category = /** @class */ (function () {
    function Category() {
    }
    Category.get = function (category) {
        return categories[category];
    };
    Category.getAll = function () {
        return categories;
    };
    return Category;
}());
exports.Category = Category;
