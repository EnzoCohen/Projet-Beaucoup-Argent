import { AppDataSource } from '../../dataSource'
import { Client } from './clientEntity'

export const clientRepository =
  AppDataSource.getRepository(Client)
