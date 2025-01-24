"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const test_1 = __importDefault(require("./routes/test"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    credentials: false
}));
app.use(express_1.default.json());
app.listen(8080, () => {
    console.log(`App running at http://localhost:8080`);
});
const MONGO_URL = "mongodb+srv://leonel:KWXKipCIITkLczuQ@cluster0.bnwjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(MONGO_URL);
mongoose_1.default.connection.on('error', (error) => console.log(error));
app.use("/api", test_1.default);
//# sourceMappingURL=index.js.map