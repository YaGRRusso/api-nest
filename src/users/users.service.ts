import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'

@Injectable()
export class UsersService {
  constructor(private repository: PrismaUsersRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: string) {
    return this.repository.findOne(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto)
  }

  remove(id: string) {
    return this.repository.remove(id)
  }
}
