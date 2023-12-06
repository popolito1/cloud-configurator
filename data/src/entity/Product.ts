import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { Compat } from "./Compat"


@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number

    @Column()
    product_name: string

    @Column()
    description: string

    @Column('decimal')
    price: number

    @Column()
    image: string

    @Column()
    currency: string

    @Column()
    extended_name: string

    @Column()
    url_id: string

    @Column()
    url: string

    @Column()
    category: string

    @Column()
    fiche: Object

    @OneToOne(type => Compat)
    @JoinColumn()
    compat: Compat;
}
