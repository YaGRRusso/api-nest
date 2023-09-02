import { PaginationDto } from '@dtos/pagination.dto'
import { IsIn, IsOptional, IsString } from 'class-validator'
import { User } from '../entities/user.entity'
import { Pagination } from '@interfaces/input.interface'

export class PaginationUserDto
  extends PaginationDto<User>
  implements Pagination<User>
{
  @IsOptional()
  @IsString()
  @IsIn(Object.keys(new User()))
  sortBy?: keyof User
}
