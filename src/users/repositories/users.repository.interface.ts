import {
  Output,
  PaginatedOutput,
  Pagination,
} from '@interfaces/output.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'

export interface UsersRepository {
  findAll(pagination: Pagination): PaginatedOutput<User>
  create(data: CreateUserDto): Output<User>
  findOne(id: string): Output<User>
  remove(id: string): Output<User>
  update(id: string, data: UpdateUserDto): Output<User>
}
