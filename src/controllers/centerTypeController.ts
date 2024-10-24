import { Request, Response } from "express";
import { getMoonsCenterType } from "../services/smileCenterType";

async function getMoonsCenterTypeController(req: Request, res: Response) {
  try {
    const moonsCenterType = await getMoonsCenterType();
    res.json(moonsCenterType);
  } catch (error) {
    res.status(500).send({
      message: `Error al obtener los tipos de centro de la luna ${error}`,
    });
  }
}

export { getMoonsCenterTypeController };
