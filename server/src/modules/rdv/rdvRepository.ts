import { AppDataSource } from '../../dataSource'
import { RDV } from './rdvEntity'

export const rdvRepository =
  AppDataSource.getRepository(RDV)
