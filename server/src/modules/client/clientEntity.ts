import {
  ChildEntity,
  OneToMany,
} from 'typeorm'
import { RDV } from '../rdv/rdvEntity'
import { User } from '../user/userEntity'

@ChildEntity()
export class Client extends User {
  @OneToMany(()=> RDV, (rdv)=>rdv.client)
  rdvs: RDV[]
}
