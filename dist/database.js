"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URL = process.env.MONGO_URL || "";
const connectDB = async () => {
    try {
        mongoose_1.default.Promise = Promise;
        mongoose_1.default.connect(MONGO_URL);
    }
    catch (error) {
        console.log(MONGO_URL);
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
mongoose_1.default.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});
//# sourceMappingURL=database.js.map