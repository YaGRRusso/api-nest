import { Injectable } from '@nestjs/common'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  async create(data: Create<Vehicle>): Output<Vehicle> {
    return await this.repository.create(data)
  }

  async findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle> {
    return await this.repository.findAll(pagination)
  }

  async searchAll(
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    return await this.repository.searchAll(pagination, search)
  }

  async findAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    const search: Search<Vehicle> = { userId: id }
    return await this.repository.searchAll(pagination, search)
  }

  async searchAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    search = { ...search, id }
    return await this.repository.searchAll(pagination, search)
  }

  async update(id: string, update: Update<Vehicle>): Output<Vehicle> {
    return await this.repository.update(id, update)
  }

  async remove(id: string): Output<Vehicle> {
    return await this.repository.remove(id)
  }
}
