"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.write('Hello, World!');
    res.end();
});
const test_port = 3000;
const domain = 'webska.net';
server.listen(domain, () => {
    console.log(`Server is running at http://localhost:${domain}`);
});
