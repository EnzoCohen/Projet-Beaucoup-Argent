import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  
} from 'typeorm'
import { Client } from '../client/clientEntity'
import { Adresse } from '../adresse/adresseEntity'
import { Technicien } from '../technicien/technicienEntity'

@Entity()
export class RDV {
  @PrimaryGeneratedColumn()
  id?: number 
  @Column()
  details: string
  @Column()
  dateDebut:Date 
  @Column()
  dateFin: Date
  @ManyToOne(()=> Client, (client)=> client.rdvs)
  client: Client
  @ManyToOne(()=> Technicien, (technicien)=> technicien.rdvs)
  Technicien: Technicien
  @ManyToOne(()=> Adresse, (adresse)=> adresse.rdvs)
  adresse:Adresse
 
  
}
