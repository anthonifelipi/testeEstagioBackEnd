"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const verifyAuthToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token",
        });
    }
    const splitToken = token.split(" ");
    jsonwebtoken_1.default.verify(splitToken[1], process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
        req.user = {
            id: decoded.user.id,
            name: decoded.user.name,
            email: decoded.user.email,
            cpf: decoded.user.phone,
        };
        next();
    });
};
exports.default = verifyAuthToken;
