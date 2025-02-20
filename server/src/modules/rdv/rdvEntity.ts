import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  
} from 'typeorm'
import { Client } from '../client/clientEntity'
import { Adresse } from '../adresse/adresseEntity'

@Entity()
export class RDV {
  @PrimaryGeneratedColumn()
  id: number 
  @Column()
  details: string
  @Column()
  dateDebut:Date 
  @Column()
  dateFin: Date
  @Column({nullable: true})
  dateDuJour:Date
  @ManyToOne(()=> Client, (client)=> client.rdvs)
  client: Client
  @ManyToOne(()=> Adresse, (adresse)=> adresse.rdvs)
  adresse:Adresse
 
  
}
