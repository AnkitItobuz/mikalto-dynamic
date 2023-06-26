import http from 'http';
import fs from "fs/promises";
import url from "url";
import {port} from './config.js';
import { getRequestData } from './routes.js';


// console.log(`server is running on http://${port}`);

async function modifyFile(totalFormData, fileName) {
    let readFileData = await fs.readFile(fileName, "utf-8");
    readFileData = JSON.parse(readFileData);
    readFileData.push(totalFormData);
    await fs.writeFile(fileName, JSON.stringify(readFileData));
  }

const server = http.createServer((req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");
        res.end(getRequestData(req));

    }
    catch(error)
    {
        console.log(error);
    }

})

server.listen(port, () => {
    console.log(`server is running at port ${port}`);

})
