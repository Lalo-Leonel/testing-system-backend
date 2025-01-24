"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const test_1 = require("../controllers/test");
const routerTest = (0, express_1.Router)();
routerTest.post("/test", test_1.createTest);
routerTest.get("/test", test_1.listTest);
routerTest.get("/test/:id", test_1.showTest);
exports.default = routerTest;
//# sourceMappingURL=test.js.map