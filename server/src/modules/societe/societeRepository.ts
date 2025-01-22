import { AppDataSource } from '../../dataSource'
import { Societe } from './societeEntity'

export const societeRepository =
  AppDataSource.getRepository(Societe)
