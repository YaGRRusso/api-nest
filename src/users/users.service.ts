import { Injectable } from '@nestjs/common'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { User } from './entities/user.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(private repository: PrismaUsersRepository) {}

  async create(data: Create<User>): Output<User> {
    const password = await bcrypt.hash(data.password, 8)
    return await this.repository.create({ ...data, password })
  }

  async findAll(pagination: Pagination<User>): PaginatedOutput<User> {
    return await this.repository.findAll(pagination)
  }

  async findOne(search: Search<User>): Output<User> {
    return await this.repository.findOne(search)
  }

  async searchAll(
    pagination: Pagination<User>,
    search: Search<User>,
  ): PaginatedOutput<User> {
    return await this.repository.searchAll(pagination, search)
  }

  async update(id: string, update: Update<User>): Output<User> {
    return await this.repository.update(id, update)
  }

  async remove(id: string): Output<User> {
    return await this.repository.remove(id)
  }
}
