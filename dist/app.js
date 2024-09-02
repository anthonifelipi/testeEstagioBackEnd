"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const client_1 = require("@prisma/client");
const login_router_1 = __importDefault(require("./routes/login.router"));
const tasks_router_1 = __importDefault(require("./routes/tasks.router"));
require("../@types/express");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
exports.prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use("/users", users_router_1.default);
app.use("/login", login_router_1.default);
app.use("/tasks", tasks_router_1.default);
app.listen(port, () => {
    console.log("Server runing");
});
exports.default = app;
