import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectIdColumn, ObjectID, OneToMany } from "typeorm";


@Entity('user')
export default class User {

    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    user_name!: string;

    @Column()
    Country!: string;

    @Column()
    @CreateDateColumn()
    created_at!: Date;

    @Column()
    @UpdateDateColumn()
    updated_at!: Date;


}