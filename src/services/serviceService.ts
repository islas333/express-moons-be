import { service } from "../models/service";
import { getAllSmileCenters } from "./smileCenterService";

const getMoonsServices = async (): Promise<service[]> => {
  const allData = await getAllSmileCenters();
  const serviceSet = new Set<string>();

  allData.forEach((center) => {
    if (center.Services) {
      Object.keys(center.Services).forEach((key) => serviceSet.add(key));
    }
  });

  const servicesArray: service[] = Array.from(serviceSet).map((service) => ({
    service,
  }));
  return servicesArray;
};

export { getMoonsServices };
