import { PartialType } from '@nestjs/swagger'
import { CreateUserDto } from './create-user.dto'
import { Update } from '@interfaces/input.interface'
import { User } from '../entities/user.entity'

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements Update<User> {}
