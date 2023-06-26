import { heroSection } from './data.js';
import { welcomeSection } from './data.js';
import { roomsSection } from './data.js';
import { activitiesSection } from './data.js';
import { experienceSection } from './data.js';
import { helloSection } from './data.js';
import { ratingSection } from './data.js';
import { joinUsSection } from './data.js';


import { parse } from "querystring";


export function getRequestData(req) {
    let status = 200;
    if (req.url === "/") {
        return JSON.stringify({
            //   status,
            text: "Welcome to api",
        });
    }
    else if (req.url === "/heroSection") {
        return JSON.stringify({
            // status,
            heroSection: heroSection,
        })
    }
    else if (req.url === "/welcomeSection") {
        return JSON.stringify({
            // status,
            welcomeSection: welcomeSection,
        })
    }
    else if (req.url === "/roomsSection") {
        return JSON.stringify({
            // status,
            roomsSection: roomsSection,
        })
    }
    else if (req.url === "/activitiesSection") {
        return JSON.stringify({
            // status,
            activitiesSection: activitiesSection,
        })
    }
    else if (req.url === "/experienceSection") {
        return JSON.stringify({
            // status,
            experienceSection: experienceSection,
        })
    }
    else if (req.url === "/helloSection") {
        return JSON.stringify({
            // status,
            helloSection: helloSection,
        })
    }
    else if (req.url === "/ratingSection") {
        return JSON.stringify({
            // status,
            ratingSection: ratingSection,
        })
    }
    else if (req.url === "/joinUsSection") {
        return JSON.stringify({

            // status,
            joinUsSection: joinUsSection,
        })
    }

    else if(req.url === "/post-data") {
        let chunks ="";
        req.on("data", (chunk) => {
            chunks = chunk.toString();
        });
        let parsedData
        req.on("end", () => {
             parsedData = parse(chunks);
            console.log(parsedData);
            if(Object.keys(parsedData).length !== 0){
                modifyFile(parsedData, "../data.json");
            }
           
        });
        return JSON.stringify({parsedData:parsedData})
    }
    else {
        console.log(req.url);
       return JSON.stringify({
        message:"Successfully Connected"
       })
    }
}
