"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router
    .get('/api', (req, res) => {
    return res.json({
        name: 'typeScript express',
        version: '4.0.1',
    });
})
    .post('/api', (req, res) => {
    const Age = req.body.age;
    return res.send('success Age:' + Age);
});
exports.default = router;
