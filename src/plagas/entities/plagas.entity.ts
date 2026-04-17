import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
 @Entity()
 export class Plagas{
    @PrimaryGeneratedColumn()
    id_plagas!: number;

    @Column()
    nombre_plaga!:string;

    @Column()
    grado_daño!: string;
 }
