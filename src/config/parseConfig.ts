import Parse from "parse/node";
import dotenv from "dotenv";

dotenv.config();

const APP_ID = process.env.APP_ID || "";
const JAVASCRIPT_KEY = process.env.JAVASCRIPT_KEY || "";

if (!APP_ID || !JAVASCRIPT_KEY) {
  throw new Error("Missing Parse credentials");
}

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(APP_ID, JAVASCRIPT_KEY);

export default Parse;
