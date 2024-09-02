"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const login_1 = __importDefault(require("../../services/login"));
const loginController = async (req, res) => {
    const { email, password } = req.body;
    const token = await (0, login_1.default)({ email, password });
    return res.status(200).json({ token });
};
exports.loginController = loginController;
exports.default = exports.loginController;
