import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from '../entities/vehicle.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

export interface VehiclesRepository {
  findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle>
  searchAll(
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle>
  findAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
  ): PaginatedOutput<Vehicle>
  searchAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle>
  create(data: Create<Vehicle>): Output<Vehicle>
  findOne(id: string): Output<Vehicle>
  remove(id: string): Output<Vehicle>
  update(id: string, data: Update<Vehicle>): Output<Vehicle>
}
