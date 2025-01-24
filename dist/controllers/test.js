"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTest = exports.listTest = exports.createTest = void 0;
const test_1 = require("../models/test");
const createTest = async (req, res) => {
    try {
        const { type, question, solution } = req.body;
        if (!type || !question) {
            throw new Error('Los campos "type" y "question" son obligatorios.');
        }
        const test = new test_1.TestModel({
            type,
            question,
            solution,
        });
        await test.save();
        res.status(201).json({
            message: "Prueba creado exitosamente.",
            data: test,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al crear la Prueba.",
            error: error.message,
        });
    }
};
exports.createTest = createTest;
const listTest = async (req, res) => {
    try {
        const tests = await test_1.TestModel.find();
        res.status(200).json({ data: tests });
    }
    catch (error) {
        res.status(500).json({
            message: "Error al listar las Pruebas",
            error: error.message,
        });
    }
};
exports.listTest = listTest;
const showTest = async (req, res) => {
    const { id } = req.params;
    try {
        const test = await test_1.TestModel.findById(id);
        if (!test) {
            throw new Error("Prueba no encontrada");
        }
        res.status(200).json({ message: "Prueba encontrado", data: test });
    }
    catch (error) {
        res.status(400).json({ message: `Prueba con id: ${id} no fue encontrado` });
    }
};
exports.showTest = showTest;
//# sourceMappingURL=test.js.map