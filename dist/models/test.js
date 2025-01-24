"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const mongoose_1 = require("mongoose");
const TestSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
        enum: ["desarrollar", "generar"],
    },
    question: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: function () {
            return this.type === "generar";
        },
    },
}, {
    timestamps: true,
});
exports.TestModel = (0, mongoose_1.model)("Test", TestSchema);
//# sourceMappingURL=test.js.map