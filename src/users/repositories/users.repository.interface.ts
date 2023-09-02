import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { User } from '../entities/user.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

export interface UsersRepository {
  findAll(pagination: Pagination<User>): PaginatedOutput<User>
  searchAll(
    pagination: Pagination<User>,
    search: Search<User>,
  ): PaginatedOutput<User>
  create(data: Create<User>): Output<User>
  findOne(id: string): Output<User>
  remove(id: string): Output<User>
  update(id: string, data: Update<User>): Output<User>
}
