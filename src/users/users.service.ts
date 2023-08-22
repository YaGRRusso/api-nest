import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return { method: 'create', createUserDto }
  }

  findAll() {
    return { method: 'findAll' }
  }

  findOne(id: string) {
    return { method: 'findOne', id }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return {
      method: 'update',
      id,
      updateUserDto,
    }
  }

  remove(id: string) {
    return { method: 'remove', id }
  }
}
