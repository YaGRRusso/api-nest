import { Injectable } from '@nestjs/common'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  async create(data: Create<Vehicle>): Output<Vehicle> {
    return { data: await this.repository.create(data), error: null }
  }

  async findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle> {
    return { data: await this.repository.findAll(pagination), error: null }
  }

  async searchAll(
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    return {
      data: await this.repository.searchAll(pagination, search),
      error: null,
    }
  }

  async findAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    const search: Search<Vehicle> = { userId: id }
    return {
      data: await this.repository.searchAll(pagination, search),
      error: null,
    }
  }

  async searchAllOfUser(
    id: string,
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    search = { ...search, id }
    return {
      data: await this.repository.searchAll(pagination, search),
      error: null,
    }
  }

  async findOne(id: string): Output<Vehicle> {
    return { data: await this.repository.findOne(id), error: null }
  }

  async update(id: string, update: Update<Vehicle>): Output<Vehicle> {
    return { data: await this.repository.update(id, update), error: null }
  }

  async remove(id: string): Output<Vehicle> {
    return { data: await this.repository.remove(id), error: null }
  }
}
