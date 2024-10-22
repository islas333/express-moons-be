import express from "express";
import Parse from "parse/node";
import { isNativeError } from "util/types";

const APP_ID = "jVPRLJkCUpQpKHX6rYjcZs8OEUCHRQIpqICxQt1D";
const JAVASCRIPT_KEY = "WywY1XSKm2D3qtQV7bexkQV6gAXeftHrEi7x4tvR";

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  APP_ID, // This is your Application ID
  JAVASCRIPT_KEY, // This is your Javascript key
);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

interface SmileCenter {
  Timetable: {
    saturday: string[];
    weekdays: string[];
  };
  Moons_Center: boolean;
  Street: string;
  Center_Type: string;
  Apt: string;
  Active: boolean;
  Number: string;
  City: string;
  Latitude: number;
  Zone: string;
  Map_URL: string;
  Prev_Videocall: boolean;
  Phone: string[];
  Order: number;
  Neighborhood: string;
  Longitude: number;
  State: string;
  Center_Name: string;
  Calendar_Id: number;
  Country: string;
  totalReviews: number | null;
  Appointment_Type: string;
  extractReviews: boolean;
  reviews: string | null;
  rating: number;
  Services: {
    [key: string]: {
      productId: string;
      AppointmentTypeId: string;
    };
  };
  retailApp: boolean;
  createdAt: string;
  updatedAt: string;
  objectId: string;
}

interface allSmileCenters {
  objectId: string;
  Center_Name: string;
  Moons_Center: boolean;
  Center_Type: string;
  Street: string;
  City: string;
  Zone: string;
  Neighborhood: string;
  Region: string;
  State: string;
  Country: string;
  Notes: string;
  Center_Desc: string;
  Apt: string;
  Map_URL: string;
  Phone: string;
  promo: string;
  whatsAppLink: string;
  Services: {
    [key: string]: {
      productId: string;
      AppointmentTypeId: string;
    };
  };
  Calendar_Id: number;
  Apointment_Type_Id: string;
}

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

    // console.log("SmileCenters:", smileCenters);
    // for (const smileCenter of smileCenters) {
    //   console.log("Services:", smileCenter.Services);
    //   console.log("Apointment_Type_Id", smileCenter.State);
    // }
    return smileCenters;
  } catch (error: unknown) {
    console.error("Error obtener SmileCenters", error);
    return [];
  }
};

interface centerType {
  objectId: string;
  Center_Type: string;
}

const getMoonsCenterType = async (): Promise<centerType[]> => {
  const allData = await getAllSmileCenters();
  for (const data of allData) {
    console.log("Center_Type:", data.Center_Type);
  }
  return [];
};

interface zone {
  objectId: string;
  Center_Type: string;
}

const getMoonsZone = async (): Promise<zone[]> => {
  const allData = await getAllSmileCenters();
  for (const data of allData) {
    console.log("Zone:", data.Zone);
  }
  return [];
};

interface service {
  objectId: string;
  service: string;
}

const getMoonsServices = async (): Promise<service[]> => {
  const allData = await getAllSmileCenters();
  for (const service of allData) {
    if (service.Services) {
      for (const key in service.Services) {
        console.log("Service:", key);
      }
    }
  }
  return [];
};

interface allMoonsServices {
  objectId: string;
  Apointment_Type_Id: string;
  Services: {
    [key: string]: {
      productId: string;
      AppointmentTypeId: string;
    };
  };
}

const getMoonsServicesAll = async (): Promise<allMoonsServices[]> => {
  const query = new Parse.Query("SmileCenters");
  // query.limit(10);
  query.ascending("createdAt");
  try {
    const results = await query.find();
    const moonsServices: allMoonsServices[] = results.map((result) => {
      const service = result.toJSON();
      return {
        objectId: service.objectId,
        Apointment_Type_Id: service.Appointment_Type_Id,
        Services: service.Services,
      };
    });

    const serviceMap: {
      [key: string]: {
        AppointmentTypeId: string;
        ids_centers: string[];
      };
    } = {};

    for (const service of moonsServices) {
      // console.log("Service:", service.Apointment_Type_Id);
      if (service.Services) {
        for (const key in service.Services) {
          if (key) {
            const value = service.Services[key];
            if (!serviceMap[key]) {
              serviceMap[key] = {
                AppointmentTypeId: value.AppointmentTypeId,
                ids_centers: [],
              };
            }
            if (!serviceMap[key].ids_centers.includes(service.objectId)) {
              serviceMap[key].ids_centers.push(service.objectId);
            }
          }
        }
      }
      if (service.Apointment_Type_Id !== undefined) {
        // console.log("Apointment_Type_Id:", service.Apointment_Type_Id);
        if (!serviceMap[`s_p_${service.Apointment_Type_Id}`]) {
          serviceMap[`s_p_${service.Apointment_Type_Id}`] = {
            AppointmentTypeId: service.Apointment_Type_Id,
            ids_centers: [],
          };
        }
        serviceMap[`s_p_${service.Apointment_Type_Id}`].ids_centers.push(
          service.objectId,
        );
      }
    }

    console.log("Service Map:", serviceMap);
    return moonsServices;
  } catch (error: unknown) {
    console.error("Error obtener SmileCenters", error);
    return [];
  }
};

getMoonsServices();
// getMoonsServices();
// getMoonsServices();
// const main = async () => {
//   const resultado = await getSmileCenters();
//   console.log("Resultado:", resultado.length);
// };

// main().catch((error) => console.error("Error in main function:", error));
