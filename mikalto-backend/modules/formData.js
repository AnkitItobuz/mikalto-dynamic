import fs from "fs/promises";

export async function modifyFile(totalFormData, fileName) {
    let readFileData = await fs.readFile(fileName, "utf-8");
    readFileData = JSON.parse(readFileData);
    readFileData.push(totalFormData);
    await fs.writeFile(fileName, JSON.stringify(readFileData));
  }