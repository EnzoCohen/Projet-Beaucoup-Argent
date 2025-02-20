import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm'

@Entity()
@TableInheritance({ column: {type: 'varchar',name:"role"}})
export abstract class User {
  @PrimaryGeneratedColumn()
  id?: number
  @Column({unique: true,})
  login: string
  @Column()
  password:string
  @Column({ nullable: true })
  prenom?:string
  @Column({ nullable: true })
  nom?:string
  @Column({ nullable: true })
  telephone?:string
}
