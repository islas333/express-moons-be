export interface allSmileCenters {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
