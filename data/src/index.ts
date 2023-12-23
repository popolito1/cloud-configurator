import { AppDataSource } from "./data-source"
import * as express from "express"
import { Request, Response } from "express"


require("dotenv").config()
const cors = require("cors")

var corsOptions = {
  origin: process.env.ORIGIN
};

// establish database connection
AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

// create and setup express app
const app= express()
const port = process.env.PORT;
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/', (req: Request, res: Response) => {
    res.send('DB Server');
  });
// start express server
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})