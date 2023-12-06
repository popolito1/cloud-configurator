import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Compat {

    @PrimaryGeneratedColumn()
    compat_id: number

    @Column()
    ddr: string

    @Column(type=> String)
    chipset: string[]

    @Column()
    m_chipset: number

    @Column()
    TDP: string

    @Column(type => String)
    size: string[]

    @Column()
    m_size: string

    
}
