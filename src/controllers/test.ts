import { Request, Response } from "express";
import { TestModel } from "../models/test";

export const createTest = async (req: Request, res: Response) => {
  try {
    const { type, question, solution } = req.body;

    if (!type || !question) {
      throw new Error('Los campos "type" y "question" son obligatorios.');
    }

    const test = new TestModel({
      type,
      question,
      solution,
    });

    await test.save();

    res.status(201).json({
      message: "Prueba creado exitosamente.",
      data: test,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la Prueba.",
      error: error.message,
    });
  }
};

export const listTest = async (req: Request, res: Response) => {
  try {
    const tests = await TestModel.find();
    res.status(200).json({ data: tests });
  } catch (error) {
    res.status(500).json({
      message: "Error al listar las Pruebas",
      error: error.message,
    });
  }
};

export const showTest = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const test = await TestModel.findById(id);
    if (!test) {
      throw new Error("Prueba no encontrada");
    }
    res.status(200).json({ message: "Prueba encontrado", data: test });
  } catch (error) {
    res.status(400).json({ message: `Prueba con id: ${id} no fue encontrado` });
  }
};
