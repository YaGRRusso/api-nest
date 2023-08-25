import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { PaginationDto } from '@dtos/pagination.dto'
import { SearchVehicleDto } from '../dto/search-vehicle.dto'

export interface VehiclesRepository {
  findAll(
    pagination?: PaginationDto<Vehicle>,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle>
  findAllOfUser(
    id: string,
    pagination?: PaginationDto<Vehicle>,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle>
  create(data: CreateVehicleDto): Output<Vehicle>
  findOne(id: string): Output<Vehicle>
  remove(id: string): Output<Vehicle>
  update(id: string, data: UpdateVehicleDto): Output<Vehicle>
}
