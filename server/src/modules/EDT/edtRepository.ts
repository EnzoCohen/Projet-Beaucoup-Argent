import { AppDataSource } from '../../dataSource'
import { EDT } from './edtEntity'

export const edtRepository =
  AppDataSource.getRepository(EDT)
