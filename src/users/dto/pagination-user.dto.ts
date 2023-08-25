import { PaginationDto } from '@dtos/pagination.dto'
import { IsIn, IsOptional, IsString } from 'class-validator'
import { User } from '../entities/user.entity'

export class PaginationUserDto extends PaginationDto<User> {
  @IsOptional()
  @IsString()
  @IsIn(Object.keys(new User()))
  sortBy?: keyof User
}
