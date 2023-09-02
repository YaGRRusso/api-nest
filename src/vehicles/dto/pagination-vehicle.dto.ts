import { PaginationDto } from '@dtos/pagination.dto'
import { IsIn, IsOptional, IsString } from 'class-validator'
import { Vehicle } from '../../vehicles/entities/vehicle.entity'
import { Pagination } from '@interfaces/input.interface'

export class PaginationVehicleDto
  extends PaginationDto<Vehicle>
  implements Pagination<Vehicle>
{
  @IsOptional()
  @IsString()
  @IsIn(Object.keys(new Vehicle()))
  sortBy?: keyof Vehicle
}
