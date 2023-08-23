import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

export abstract class UsersRepository {
  abstract findAll(): Promise<User[]>
  abstract create(data: CreateUserDto): Promise<User>
  abstract findOne(id: string): Promise<User>
  abstract remove(id: string): Promise<User>
  abstract update(id: string, data: UpdateUserDto): Promise<User>
}
