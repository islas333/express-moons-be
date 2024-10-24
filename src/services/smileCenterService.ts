import Parse from "../config/parseConfig";
import { allSmileCenters } from "../models/smileCenter";

const getAllSmileCenters = async (): Promise<allSmileCenters[]> => {
  const query = new Parse.Query("SmileCenters");
  // query.limit(10);
  query.ascending("createdAt");
  try {
    const results = await query.find();
    const smileCenters: allSmileCenters[] = results.map((result) => {
      const smileCenter = result.toJSON();
      return {
        objectId: smileCenter.objectId,
        Center_Name: smileCenter.Center_Name,
        Zone: smileCenter.Zone,
        Services: smileCenter.Services,
        Calendar_Id: smileCenter.Calendar_Id,
        Apointment_Type_Id: smileCenter.Appointment_Type_Id,
        Moons_Center: smileCenter.Moons_Center,
        Center_Type: smileCenter.Center_Type,
        Street: smileCenter.Street,
        City: smileCenter.City,
        Neighborhood: smileCenter.Neighborhood,
        Region: smileCenter.Region,
        State: smileCenter.State,
        Country: smileCenter.Country,
        Notes: smileCenter.Notes,
        Center_Desc: smileCenter.Center_Desc,
        Apt: smileCenter.Apt,
        Map_URL: smileCenter.Map_URL,
        Phone: smileCenter.Phone,
        promo: smileCenter.promo,
        whatsAppLink: smileCenter.whatsAppLink,
      };
    });

    return smileCenters;
  } catch (error: unknown) {
    console.error("Error obtener SmileCenters", error);
    return [];
  }
};

export { getAllSmileCenters };
