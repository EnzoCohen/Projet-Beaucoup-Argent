import { AppDataSource } from '../../dataSource'
import { Adresse } from './adresseEntity'

export const adresseRepository =
  AppDataSource.getRepository(Adresse)
