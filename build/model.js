"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var UsersSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    apelido: { type: String, required: true, unique: true },
    whatsapp: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = mongoose.model('Users', UsersSchema);
