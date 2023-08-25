import { IsNumber, IsOptional, IsString } from 'class-validator'

export class SearchVehicleDto {
  @IsOptional()
  @IsString()
  plate?: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsNumber()
  year?: number

  @IsOptional()
  @IsString()
  userId?: string
}
