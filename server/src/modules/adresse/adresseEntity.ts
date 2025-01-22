import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  
} from 'typeorm'
import { RDV } from '../rdv/rdvEntity'

@Entity()
export class Adresse {
  @PrimaryGeneratedColumn()
  id: number 
  @Column()
  ville: string
  @Column()
  pays:string
  @Column()
  rue: string
  @Column({nullable: true})
  batiment:string
  @OneToMany(()=>RDV, (rdv)=> rdv.adresse)
  rdvs:RDV[]
}
