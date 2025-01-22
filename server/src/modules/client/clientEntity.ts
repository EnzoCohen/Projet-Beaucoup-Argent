import {
  ChildEntity,
  OneToMany,
} from 'typeorm'
import { RDV } from '../rdv/rdvEntity'

@ChildEntity()
export class Client {
  @OneToMany(()=> RDV, (rdv)=>rdv.client)
  rdvs: RDV[]
}
