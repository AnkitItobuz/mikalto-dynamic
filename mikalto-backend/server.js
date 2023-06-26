import http from "http";
import { port } from "./modules/config.js";
import { getRequestData } from "./modules/routes.js";

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end(getRequestData(req));
  } catch (error) {
    console.log(error);
  }
});

server.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
