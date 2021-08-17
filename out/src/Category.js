"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var Categories = /** @class */ (function () {
    function Categories() {
    }
    Categories.get = function (category) {
        return categories[category];
    };
    Categories.getAll = function () {
        return categories;
    };
    return Categories;
}());
exports.default = Categories;
