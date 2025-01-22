import { DataSource } from 'typeorm'
import { User } from './modules/user/userEntity'
import { Adresse } from './modules/adresse/adresseEntity'
import { Client } from './modules/client/clientEntity'
import { EDT } from './modules/EDT/edtEntity'
import { RDV } from './modules/rdv/rdvEntity'
import { Societe } from './modules/societe/societeEntity'
import { Technicien } from './modules/technicien/technicienEntity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'azerty',
  database: 'postgres',
  entities: [User,Adresse,Client,EDT,RDV,Societe,Technicien],
  synchronize: true,
  logging: false,
})
