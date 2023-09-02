import { User } from '../entities/user.entity'
import { CommonRepositoryInterface } from '@interfaces/repository.interface'

export interface UsersRepositoryInterface
  extends CommonRepositoryInterface<User> {}
