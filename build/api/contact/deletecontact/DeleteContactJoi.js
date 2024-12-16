"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const ErrorUtility_1 = __importDefault(require("../../../domain/constants/message/ErrorUtility"));
const DeleteContactJoi = joi_1.default.object({
    id: joi_1.default.string().required().messages(ErrorUtility_1.default.joiHelper("id", "string", false)),
});
exports.default = DeleteContactJoi;
