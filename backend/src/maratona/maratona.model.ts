import {
    Entity,
    Column,
    PrimaryGeneratedColumn, CreateDateColumn,
} from 'typeorm';

// export enum LiveStatus {
//     PENDING = 'pending',
//     DONE = 'done'
// }

@Entity({ name: 'maratona' })
export class Maratona {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    aula: string;


}

