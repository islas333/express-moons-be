import { Request, Response } from "express";
import { getMoonsZone } from "../services/zoneService";

async function getMoonsZoneController(req: Request, res: Response) {
  try {
    const moonsZone = await getMoonsZone();
    res.json(moonsZone);
  } catch (error) {
    res.status(500).send({
      message: `Error al obtener las zonas de la luna ${error}`,
    });
  }
}

export { getMoonsZoneController };
