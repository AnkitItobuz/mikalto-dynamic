
import * as data from "../database/data.js"
import { formData } from "../modules/getFormData.js";


export function getRequestData(req) {
  let status = 200;
  if (req.url === "/") {
    return JSON.stringify({
      text: "Welcome to api",
    });
  } else if (req.url === "/heroSection") {
    return JSON.stringify({
      heroSection: data.heroSection,
      message: "heroSection data",
      Sucess: true
    });
  } else if (req.url === "/welcomeSection") {
    return JSON.stringify({
      welcomeSection: data.welcomeSection,
      message: "welcomeSection data",
      Sucess: true
    });
  } else if (req.url === "/roomsSection") {
    return JSON.stringify({
      roomsSection: data.roomsSection,
      message: "roomsSection data",
      Sucess: true
    });
  } else if (req.url === "/activitiesSection") {
    return JSON.stringify({
      activitiesSection: data.activitiesSection,
      message: "activitiesSection data",
      Sucess: true
    });
  } else if (req.url === "/experienceSection") {
    return JSON.stringify({
      experienceSection: data.experienceSection,
    });
  } else if (req.url === "/helloSection") {
    return JSON.stringify({
      helloSection: data.helloSection,
    });
  } else if (req.url === "/ratingSection") {
    return JSON.stringify({
      ratingSection: data.ratingSection,
    });
  } else if (req.url === "/joinUsSection") {
    
    return JSON.stringify({
      joinUsSection: data.joinUsSection,
    });
  }
   else if (req.url === "/post-data") {
     formData(req);
  }
 
   else {
    console.log(req.url);
    return JSON.stringify({
      message: "Successfully Connected",
    });

  }
}
