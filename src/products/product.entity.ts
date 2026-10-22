import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar",{nullable:false, unique:true,length:50})
    name:string;
    @Column('integer', {default:0})
    price:number;
    @Column('integer', {default:0})
    stock:number;
    @Column('varchar', {length:20})
    category:string;
    @Column('timestamp')
    createAt:Date;
    @Column('timestamp')
    updateAt:Date
}