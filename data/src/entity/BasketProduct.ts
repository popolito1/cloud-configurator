import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Basket } from "./Basket";
import { Product } from "./Product";

@Entity()
export class BasketProduct {

    @PrimaryGeneratedColumn()
    basketProduct_id: number;

    @ManyToOne(type => Basket, basket => basket.basketProducts)
    basket: Basket;

    @ManyToOne(type => Product)
    product: Product;

}