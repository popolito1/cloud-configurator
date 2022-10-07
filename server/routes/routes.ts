import { Express, Request, Response } from 'express'
const fs = require("fs")

export function route(app: Express){
    app.route("/API/products")
        .post(getProducts)

    app.route("/API/product")
        .post(getProduct)

    app.route("/API/pdf")
        .post()
}

interface Product {
    name: string,
    image: string,
    price: number,
    currency: string,
    extendedName: string,
    urlId: string,
    url: string,
    description: string,
    fiche: Object
}

function openJsonFile(fileName:string){
    let raw: string = fs.readFileSync(`./fiche_techniques/${fileName}.json`)
    let data = <Product[]> JSON.parse(raw)
    return data;
}

function getProducts(req: Request, res: Response){
    let data: Array<Product> = openJsonFile(req.body.category)
    res.status(200).json(data)
}

function getProduct(req: Request, res: Response){
    const urlId: string = req.body.urlId;
    let data: Array<Product> = openJsonFile(req.body.category)
    let product = data.filter(el => el.urlId == urlId)
    res.status(200).json(product[0])
}