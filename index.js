var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define("src/Category", ["require", "exports"], function (require, exports) {
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
});
define("src/Device", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Item", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Safe", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/User", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Keycard", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/KeyExchange", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/Platform", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("src/SessionToken", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("index", ["require", "exports", "src/Category", "src/Device", "src/Item", "src/Keycard", "src/KeyExchange", "src/Platform", "src/Safe", "src/SessionToken", "src/User"], function (require, exports, Category_1, Device_1, Item_1, Keycard_1, KeyExchange_1, Platform_1, Safe_1, SessionToken_1, User_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(Category_1, exports);
    __exportStar(Device_1, exports);
    __exportStar(Item_1, exports);
    __exportStar(Keycard_1, exports);
    __exportStar(KeyExchange_1, exports);
    __exportStar(Platform_1, exports);
    __exportStar(Safe_1, exports);
    __exportStar(SessionToken_1, exports);
    __exportStar(User_1, exports);
});
