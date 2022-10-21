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
      return await res.json();
}

export async function getProducts(category: string | string[]):Promise<Product[]> {
    const res: Response = await fetch("http://localhost:8081/API/products",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"category": category})        
    })
    return await res.json();
}
