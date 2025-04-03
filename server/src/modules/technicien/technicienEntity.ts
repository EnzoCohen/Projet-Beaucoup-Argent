import {
  ChildEntity,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { User } from '../user/userEntity'
import { Adresse } from '../adresse/adresseEntity'
import { RDV } from '../rdv/rdvEntity'

@ChildEntity()
export class Technicien extends User{
  @Column()
  competence?: string
  @Column()
  profilPicture?:string
  @Column({default: true})
  avaible?:boolean
  @OneToOne(()=>Adresse , (adresse)=>adresse.technicien)
  adresse?: Adresse
 @OneToMany(()=> RDV, (rdv)=>rdv.Technicien)
   rdvs?: RDV[]
  
}
