"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createTask_controller_1 = __importDefault(require("../controllers/tasks/createTask.controller"));
const verifyAuthToken_1 = __importDefault(require("../middlewares/verifyAuthToken"));
const tasksRouter = (0, express_1.Router)();
tasksRouter.post("", verifyAuthToken_1.default, createTask_controller_1.default);
exports.default = tasksRouter;
