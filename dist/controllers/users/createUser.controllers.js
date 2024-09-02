"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_service_1 = __importDefault(require("../../services/users/createUser.service"));
const createusersController = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await (0, createUser_service_1.default)(data);
        return res.status(201).json(newUser);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.default = createusersController;
