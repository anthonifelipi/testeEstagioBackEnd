"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const appErrors_1 = require("../../errors/appErrors");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginService = async ({ email, password }) => {
    const user = await app_1.prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    if (!user) {
        throw new appErrors_1.AppError("Wrong credentials", 403);
    }
    const matchPassword = await (0, bcryptjs_1.compare)(password, user.password);
    if (!matchPassword) {
        throw new appErrors_1.AppError("Wrong credentials", 403);
    }
    const token = jsonwebtoken_1.default.sign({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            cpf: user.cpf,
        },
    }, String(process.env.JWT_SECRET), { expiresIn: "12h" });
    return token;
};
exports.default = loginService;
