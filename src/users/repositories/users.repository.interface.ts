import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'
import { PaginationDto } from '@dtos/pagination.dto'
import { SearchUserDto } from '../dto/search-user.dto'

export interface UsersRepository {
  findAll(
    paginationDto: PaginationDto<User>,
    searchUserDto?: SearchUserDto,
  ): PaginatedOutput<User>
  create(data: CreateUserDto): Output<User>
  findOne(id: string): Output<User>
  remove(id: string): Output<User>
  update(id: string, data: UpdateUserDto): Output<User>
}
