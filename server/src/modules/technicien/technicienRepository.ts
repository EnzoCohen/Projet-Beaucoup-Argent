import { AppDataSource } from '../../dataSource'
import { Technicien } from './technicienEntity'

export const technicienRepository =
  AppDataSource.getRepository(Technicien)
