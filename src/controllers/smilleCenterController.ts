import { Request, Response } from "express";
import { getAllSmileCenters } from "../services/smileCenterService";

async function getAllSmileCentersController(req: Request, res: Response) {
  try {
    const smileCenters = await getAllSmileCenters();
    res.json(smileCenters);
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error al obtener los SmileCenters ${error}` });
  }
}

export { getAllSmileCentersController };
