import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'
import {
  Output,
  PaginatedOutput,
  Pagination,
} from '@interfaces/output.interface'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(private repository: PrismaUsersRepository) {}

  create(createUserDto: CreateUserDto): Output<User> {
    return this.repository.create(createUserDto)
  }

  findAll(pagination: Pagination): PaginatedOutput<User> {
    return this.repository.findAll(pagination)
  }

  findOne(id: string): Output<User> {
    return this.repository.findOne(id)
  }

  update(id: string, updateUserDto: UpdateUserDto): Output<User> {
    return this.repository.update(id, updateUserDto)
  }

  remove(id: string): Output<User> {
    return this.repository.remove(id)
  }
}
