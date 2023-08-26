import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator'

export class PaginationDto<T = Record<string, unknown>> {
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
