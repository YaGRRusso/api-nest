import { Create } from '@interfaces/input.interface'
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator'
import { Vehicle } from '../entities/vehicle.entity'

export class CreateVehicleDto implements Create<Vehicle> {
  @IsNotEmpty()
  @IsString()
  @Length(7, 7)
  plate: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  @Max(new Date().getFullYear())
  @Min(1900)
  year: number

  @IsNotEmpty()
  @IsString()
  userId: string
}
