import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Enfermedade {
    @PrimaryGeneratedColumn()
    id_enfermedad!: number;

    @Column()   
    nombre_enfermedad! : string;

    @Column()
    grado_daño! : string;
}
