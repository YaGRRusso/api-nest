import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { Pagination } from '@interfaces/input.interface'

export interface VehiclesRepository {
  findAll(pagination?: Pagination): PaginatedOutput<Vehicle>
  findAllOfUser(id: string, pagination?: Pagination): PaginatedOutput<Vehicle>
  create(data: CreateVehicleDto): Output<Vehicle>
  findOne(id: string): Output<Vehicle>
  remove(id: string): Output<Vehicle>
  update(id: string, data: UpdateVehicleDto): Output<Vehicle>
}
