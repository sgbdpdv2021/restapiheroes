"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroes = void 0;
const mongoose_1 = require("mongoose");
// Definimos el Schema
const heroSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        unique: true // useCreateIndex: true en la conexión para que se cree el índice único
    },
    name: String,
    salary: Number,
});
// La colección de la BD: vehiculos (Plural siempre)
exports.Heroes = mongoose_1.model('heroes', heroSchema);
