import { Country } from "../models/country";
import { getAllSmileCenters } from "./smileCenterService";

const getMoonsCountries = async (): Promise<Country[]> => {
  const allData = await getAllSmileCenters();
  const countrySet = new Set<string>();

  allData.forEach((center) => {
    if (center.Country) {
      countrySet.add(center.Country);
    }
  });

  const uniqueCountries: Country[] = Array.from(countrySet).map((country) => ({
    Country: country,
  }));

  return uniqueCountries;
};

export { getMoonsCountries };
