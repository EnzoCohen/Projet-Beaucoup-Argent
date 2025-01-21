import { AppDataSource } from '../../dataSource'
import { User } from './userEntity'

export const userRepository =
  AppDataSource.getRepository(User)
