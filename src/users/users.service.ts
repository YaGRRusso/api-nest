import { Injectable } from '@nestjs/common'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { User } from './entities/user.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

@Injectable()
export class UsersService {
  constructor(private repository: PrismaUsersRepository) {}

  create(data: Create<User>): Output<User> {
    return this.repository.create(data)
  }

  findAll(pagination: Pagination<User>): PaginatedOutput<User> {
    return this.repository.findAll(pagination)
  }

  searchAll(
    pagination: Pagination<User>,
    search: Search<User>,
  ): PaginatedOutput<User> {
    return this.repository.searchAll(pagination, search)
  }

  findOne(id: string): Output<User> {
    return this.repository.findOne(id)
  }

  update(id: string, update: Update<User>): Output<User> {
    return this.repository.update(id, update)
  }

  remove(id: string): Output<User> {
    return this.repository.remove(id)
  }
}
