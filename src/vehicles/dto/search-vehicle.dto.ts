import { Search } from '@interfaces/input.interface'
import { Vehicle } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class SearchVehicleDto implements Search<Vehicle> {
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
