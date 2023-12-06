import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BasketProduct } from "./BasketProduct";

@Entity()
export class Basket {

    @PrimaryGeneratedColumn()
    basket_id: number

    @Column()
    category: string

    @Column()
    urlId: string

    @OneToMany(type => BasketProduct, basketProduct => basketProduct.basket)
    basketProducts: BasketProduct[];

}