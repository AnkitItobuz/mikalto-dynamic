
import * as data from "../database/data.js"
import { formData } from "../modules/getFormData.js";
import { getResponse } from "../modules/getResponse.js";

export function getRequestData(req) {
  let status = 200;
  if (req.url === "/") {
    return getResponse("Welcome to mikalto api", "hello", true);
  } else if (req.url === "/heroSection") {
    return getResponse(data.heroSection, "hero Section data", true);
  } else if (req.url === "/welcomeSection") {
    return getResponse(data.welcomeSection, "welcome Section data", true);

  } else if (req.url === "/roomsSection") {
    return getResponse(data.roomsSection, "rooms Section data", true);

  } else if (req.url === "/activitiesSection") {
    return getResponse(data.activitiesSection, "activities Section data", true);

  } else if (req.url === "/experienceSection") {
    return getResponse(data.experienceSection, "experience Section data", true);

  } else if (req.url === "/helloSection") {
    return getResponse(data.helloSection, "hello Section data", true);

  } else if (req.url === "/ratingSection") {
    return getResponse(data.ratingSection, "rating Section data", true);

  } else if (req.url === "/joinUsSection") {
    
    return getResponse(data.joinUsSection, "join us Section data", true);

  }
   else if (req.url === "/post-data") {
     formData(req);
  }
 
   else {
    // console.log(req.url);
    return JSON.stringify({
      message: "Successfully Connected",
    });

  }
}
