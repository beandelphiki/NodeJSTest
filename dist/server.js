"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 4040;
app_1.default.listen(port, function () {
    console.log('Express server lisenting on port ' + port);
});
//# sourceMappingURL=server.js.map