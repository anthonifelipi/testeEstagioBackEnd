"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createTask_service_1 = __importDefault(require("../../services/tasks/createTask.service"));
const createTaskController = async (req, res) => {
    console.log(req);
    try {
        // const id = req.user.id;
        const data = req.body;
        const createTask = await (0, createTask_service_1.default)(data);
        return res.status(201).json(createTask);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
    }
};
exports.default = createTaskController;
