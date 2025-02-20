import {
  ChildEntity,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm'
import { Societe } from '../societe/societeEntity'
import { EDT } from '../EDT/edtEntity'
import { User } from '../user/userEntity'

@ChildEntity()
export class Technicien extends User{
  @Column()
  competenece?: string
  @ManyToOne(()=>Societe, (societe)=>societe.techniciens)
  societe?: Societe
  @OneToMany(()=>EDT, (edt)=>edt.technicien)
  edts?: EDT[]
}
