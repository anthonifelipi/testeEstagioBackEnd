"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appErrors_1 = require("../errors/appErrors");
const handlerErrors = (error, request, response, next) => {
    if (error instanceof appErrors_1.AppError) {
        return response.status(error.statusCode).json({
            message: error.message,
        });
    }
    return response.status(500).json({
        message: "Internal server error",
    });
};
exports.default = handlerErrors;
