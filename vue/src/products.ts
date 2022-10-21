import { Product } from './store'

export async function getProduct(category: string | string[], urlId: string | string[]):Promise<Product> {
    const res: Response = await fetch("http://localhost:8081/API/product",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "category": category,
          "urlId": urlId
        })        
      })
      const product: Product = await res.json();
      return product;
}

export async function getProducts(category: string | string[]):Promise<Product[]> {
    const res: Response = await fetch("http://localhost:8081/API/products",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"category": category})        
    })
    const products: Array<Product> = await res.json();
    return products
}
