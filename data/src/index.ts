import { AppDataSource } from "./data-source"
import * as express from "express"
import { Request, Response } from "express"
import { Product } from "./entity/Product"


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
const app = express()
const port = process.env.PORT;
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get('/product/:category', async (req: Request, res: Response) => {
    let category = req.params.category
    const data = await AppDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.category = :category", {category: category})
    res.status(200).json(data)
})


app.get('/product/:category/:id', async (req: Request, res: Response) => {
    let category = req.params.category
    let id = req.params.id
    const data = await AppDataSource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.category = :category", { category })
        .andWhere("product.url_id = :url_id", { id })
    res.status(200).json(data)
})


app.get('/', (req: Request, res: Response) => {
    res.send('DB Server');
  });
// start express server
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})