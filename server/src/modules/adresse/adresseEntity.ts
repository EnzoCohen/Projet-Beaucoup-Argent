import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  
} from 'typeorm'
import { RDV } from '../rdv/rdvEntity'
import { Technicien } from '../technicien/technicienEntity'

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
  @OneToOne(()=>Technicien,(technicien)=>technicien.adresse)
  technicien:Technicien
}
