import { Request, Response } from "express";
import { getMoonsServices } from "../services/serviceService";

async function getMoonsServicesController(req: Request, res: Response) {
  try {
    const moonsServices = await getMoonsServices();
    res.json(moonsServices);
  } catch (error) {
    res.status(500).send({
      message: `Error al obtener los servicios de la luna ${error}`,
    });
  }
}

export { getMoonsServicesController };
