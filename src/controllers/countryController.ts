import { Request, Response } from "express";
import { getMoonsCountries } from "../services/smileCountry";

async function getMoonsCountriesController(req: Request, res: Response) {
  try {
    const moonsCountries = await getMoonsCountries();
    res.json(moonsCountries);
  } catch (error) {
    res
      .status(500)
      .send({ message: `Error al obtener los países de la luna ${error}` });
  }
}

export { getMoonsCountriesController };
