import { DataSource } from 'typeorm'
import { User } from './modules/user/userEntity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'azerty',
  database: 'postgres',
  entities: [User],
  synchronize: true,
  logging: false,
})
