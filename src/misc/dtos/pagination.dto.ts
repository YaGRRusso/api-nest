import { IsIn, IsNumberString, IsString } from 'class-validator'

export class PaginationDto<T> {
  @IsString()
  @IsNumberString()
  page: string

  @IsString()
  @IsIn(['asc', 'desc'])
  orderBy: 'asc' | 'desc'

  @IsString()
  sortBy: keyof T
}
