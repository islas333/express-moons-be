import { zone } from "../models/zone";
import { getAllSmileCenters } from "./smileCenterService";

const getMoonsZone = async (): Promise<zone[]> => {
  const allData = await getAllSmileCenters();
  const zoneSet = new Set<string>();

  allData.forEach((center) => {
    if (center.Zone) {
      zoneSet.add(center.Zone);
    }
  });

  const uniqueZones: zone[] = Array.from(zoneSet).map((zone) => ({
    Center_Type: zone,
  }));

  return uniqueZones;
};

export { getMoonsZone };
