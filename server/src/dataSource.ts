import { DataSource } from 'typeorm'
import { User } from './modules/user/userEntity'
import { Adresse } from './modules/adresse/adresseEntity'
import { Client } from './modules/client/clientEntity'
import { RDV } from './modules/rdv/rdvEntity'
import { Technicien } from './modules/technicien/technicienEntity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'azerty',
  database: 'postgres',
  entities: [User,Adresse,Client,RDV,Technicien],
  synchronize: true,
  logging: false,
})
