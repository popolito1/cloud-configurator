import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "./entity/Product"
import { Compat } from "./entity/Compat"
import { Basket } from "./entity/Basket"
import { BasketProduct } from "./entity/BasketProduct"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "cloud-configurator",
    password: "cloud",
    database: "cloudConfiguratorDB",
    synchronize: true,
    logging: false,
    entities: [Product, Compat, Basket, BasketProduct],
})
