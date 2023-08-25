import { PaginationDto } from '@dtos/pagination.dto'
import { IsIn, IsOptional, IsString } from 'class-validator'
import { Vehicle } from '../../vehicles/entities/vehicle.entity'

export class PaginationVehicleDto extends PaginationDto<Vehicle> {
  @IsOptional()
  @IsString()
  @IsIn(Object.keys(new Vehicle()))
  sortBy?: keyof Vehicle
}
