import { Pagination } from '@interfaces/input.interface'
import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator'

export class PaginationDto<T = Record<string, unknown>>
  implements Pagination<T>
{
  @IsOptional()
  @IsString()
  @IsNumberString()
  page?: string

  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  orderBy?: 'asc' | 'desc'

  @IsOptional()
  @IsString()
  sortBy?: keyof T
}
