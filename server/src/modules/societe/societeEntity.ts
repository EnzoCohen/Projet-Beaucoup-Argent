import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  
} from 'typeorm'
import { Technicien } from '../technicien/technicienEntity'

@Entity()
export class Societe {
  @PrimaryGeneratedColumn()
  id: number 
  @Column()
  nom: string
  @Column()
  numSiret:string
  @OneToMany(()=> Technicien, (technicien)=> technicien.societe)
  techniciens: Technicien[]
}
