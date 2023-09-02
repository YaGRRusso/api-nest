import { Injectable } from '@nestjs/common'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(data: Create<Vehicle>): Output<Vehicle> {
    return this.repository.create(data)
  }

  findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle> {
    return this.repository.findAll(pagination)
  }

  searchAll(
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    return this.repository.searchAll(pagination, search)
  }

  findAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    const search: Search<Vehicle> = { userId: id }
    return this.repository.searchAll(pagination, search)
  }

  searchAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    search = { ...search, id }
    return this.repository.searchAll(pagination, search)
  }

  findOne(id: string): Output<Vehicle> {
    return this.repository.findOne(id)
  }

  update(id: string, update: Update<Vehicle>): Output<Vehicle> {
    return this.repository.update(id, update)
  }

  remove(id: string): Output<Vehicle> {
    return this.repository.remove(id)
  }
}
