import { Column,Entity,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class faculties{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name:string;

    @Column()
    expertise:string;

    @Column()
    noOfPublication:number;
}