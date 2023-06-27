
import { modifyFile } from "./formData.js";

export function formData(req) {
  
    let chunks = "";
    req.on("data", (chunk) => {
      chunks = chunk.toString();
})
    let parsedData;
    req.on("end", () => {
      parsedData = parse(chunks);
      console.log(parsedData);
      if (Object.keys(parsedData).length !== 0) {
        modifyFile(parsedData, "./formData.json");
      }
    });
    return JSON.stringify({ parsedData: parsedData });
  }

