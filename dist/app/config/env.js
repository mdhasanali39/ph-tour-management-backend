"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVariables = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVariables = () => {
    const requiredEnvVarialbes = ["DB_URI", "PORT", "NODE_ENV"];
    requiredEnvVarialbes.forEach((envVar) => {
        if (!process.env[envVar]) {
            throw new Error(`Missing environment variable ${envVar}`);
        }
    });
    return {
        DB_URI: process.env.DB_URI,
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV,
    };
};
exports.envVariables = loadEnvVariables();
