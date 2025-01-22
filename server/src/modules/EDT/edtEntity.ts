import {
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { RDV } from '../rdv/rdvEntity'
import { Technicien } from '../technicien/technicienEntity'

@Entity()
export class EDT {
  @PrimaryGeneratedColumn()
  id: number 
  @OneToMany(()=> RDV, (rdv)=> rdv.edt)
  rdvs: RDV[]
  @ManyToOne(()=> Technicien, (technicien)=> technicien.edts)
  technicien: Technicien
}
