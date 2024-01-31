import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import { Compat } from "./entity/Compat"
import { Basket } from "./entity/Basket"
import { BasketProduct } from "./entity/BasketProduct"

require("dotenv").config();


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE, 
    synchronize: true,
    logging: false,
    entities: ['**/src/entity/**/*.ts'],

})
