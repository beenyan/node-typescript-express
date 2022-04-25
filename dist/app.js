"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const Port = 2556;
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(Port, () => {
    console.log(`server started at http://localhost:${Port}`);
});
