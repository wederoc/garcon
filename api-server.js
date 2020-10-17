"use strict";

const express = require("express");
const path = require("path");

const createLogger = require("logging").default;

const logger = createLogger("Garcon - API Server");

const app = express();
const PORT = 5502;

// app.use(express.static(__dirname + '/public'));

app.get("/", (request, result, next) => {
  logger.info(`Request made`);
  result.json(["Sample", "Home"]);
  // result.sendFile(path.join(__dirname, "views/html/sample.html"));
});

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`)
});
