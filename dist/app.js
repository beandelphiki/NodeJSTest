"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
class NodeJSTest {
    //Properties End
    //Methods (Public and Private)
    //--------------------------------------------------
    //Create the constructor for the test applcation.
    constructor() {
        this.NodeJSTest = express();
        this.config();
        this.routes();
    }
    //This sets up a config function so we know to parse all incoming and outgoing requests as JSON.
    config() {
        this.NodeJSTest.use(bodyParser.json());
        this.NodeJSTest.use(bodyParser.urlencoded({ extended: false }));
    }
    //--------------------------------------------------
    //Methods End
    routes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).send({
                message: 'Hello World!'
            });
        });
        router.post('/', (req, res) => {
            const data = req.body;
            //query the database here and save the data.
            res.status(200).send(data);
        });
        this.NodeJSTest.use('/', router);
    }
}
exports.default = new NodeJSTest().NodeJSTest;
//# sourceMappingURL=app.js.map