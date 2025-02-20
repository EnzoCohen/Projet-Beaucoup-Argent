import {
  ChildEntity,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import { User } from '../user/userEntity'
import { Adresse } from '../adresse/adresseEntity'

@ChildEntity()
export class Technicien extends User{
  @Column()
  competence?: string
  @Column()
  profilPicture?:string
  @OneToOne(()=>Adresse , (adresse)=>adresse.technicien)
  adresse?: Adresse
 
  
}
