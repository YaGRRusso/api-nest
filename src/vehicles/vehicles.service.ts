import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { Pagination } from '@interfaces/input.interface'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto): Output<Vehicle> {
    return this.repository.create(createVehicleDto)
  }

  findAll(pagination: Pagination): PaginatedOutput<Vehicle> {
    return this.repository.findAll({ ...pagination, orderBy: { name: 'asc' } })
  }

  findAllOfUser(id: string, pagination: Pagination): PaginatedOutput<Vehicle> {
    return this.repository.findAllOfUser(id, {
      ...pagination,
      orderBy: { name: 'asc' },
    })
  }

  findOne(id: string): Output<Vehicle> {
    return this.repository.findOne(id)
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto): Output<Vehicle> {
    return this.repository.update(id, updateVehicleDto)
  }

  remove(id: string): Output<Vehicle> {
    return this.repository.remove(id)
  }
}
