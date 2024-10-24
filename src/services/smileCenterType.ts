import { centerType } from "../models/centerType";
import { getAllSmileCenters } from "./smileCenterService";

const getMoonsCenterType = async (): Promise<centerType[]> => {
  const allData = await getAllSmileCenters();
  const centerTypeSet = new Set<string>();

  allData.forEach((center) => {
    if (center.Center_Type) {
      centerTypeSet.add(center.Center_Type);
    }
  });

  const uniqueCenterTypes: centerType[] = Array.from(centerTypeSet).map(
    (type) => ({
      Center_Type: type,
    }),
  );

  return uniqueCenterTypes;
};

export { getMoonsCenterType };
