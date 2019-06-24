import * as express from "express";
import bodyParser = require("body-parser");
import {Request, Response} from "express"

class NodeJSTest {

    //Properties Begin:

     //Set up a property that points to itself so we can instantiate it.
     public NodeJSTest: express.Application;

    //Properties End



    //Methods (Public and Private)
    //--------------------------------------------------
    //Create the constructor for the test applcation.
    constructor(){

        this.NodeJSTest = express();
        this.config();
        this.routes();

    }

    //This sets up a config function so we know to parse all incoming and outgoing requests as JSON.
    private config():void{
        this.NodeJSTest.use(bodyParser.json());
        this.NodeJSTest.use (bodyParser.urlencoded({extended:false}));
    }

    //--------------------------------------------------
    //Methods End

    private routes():void{

        const router = express.Router();
        router.get('/', (req:Request, res: Response) =>{

            res.status(200).send({
                message: 'Hello World!'
            })
        });


        router.post('/',(req: Request, res: Response)=>{

            const data = req.body;
            //query the database here and save the data.

            res.status(200).send(data);
        });
        this.NodeJSTest.use('/',router)
    }
   
    
}


export default new NodeJSTest().NodeJSTest;