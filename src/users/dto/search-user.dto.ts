import { Search } from '@interfaces/input.interface'
import { IsOptional, IsString } from 'class-validator'
import { User } from '../entities/user.entity'

export class SearchUserDto implements Search<User> {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  cpf?: string

  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsString()
  email?: string
}
