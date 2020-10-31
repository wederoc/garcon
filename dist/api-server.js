"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const logger = createLogger("Garcon - API Server");
const app = express_1.default();
const port = 5502; // default port to listen
// define a route handler for the default home page
// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );
app.get("/", (request, result, next) => {
    // tslint:disable-next-line:no-console
    console.log(`Request made`);
    result.json(["Sample", "hHome"]);
    // result.sendFile(path.join(__dirname, "views/html/sample.html"));
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
// "use strict";
// const express = require("express");
// const path = require("path");
// const createLogger = require("logging").default;
// const logger = createLogger("Garcon - API Server");
// const app = express();
// const PORT = 5502;
// // app.use(express.static(__dirname + '/public'));
// app.listen(PORT, () => {
//   logger.info(`Listening on port ${PORT}`)
// });
//# sourceMappingURL=api-server.js.map