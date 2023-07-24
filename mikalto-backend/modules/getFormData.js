import { parse } from "querystring";
import { modifyFile } from "./formData.js";

export function formData(req) {
  if (req.url === "/post-data") {
    let chunks = "";
    req.on("data", (chunk) => {
      chunks = chunk.toString();
})
    let parsedData;
    req.on("end", () => {
      parsedData = parse(chunks);
      if (Object.keys(parsedData).length !== 0) {
        modifyFile(parsedData, "./database/formData.json");
      }
    });
    return JSON.stringify({ parsedData: parsedData });
  }
  }

