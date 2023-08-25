import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { PaginationVehicleDto } from './dto/pagination-vehicle.dto'
import { SearchVehicleDto } from './dto/search-vehicle.dto'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto): Output<Vehicle> {
    return this.repository.create(createVehicleDto)
  }

  findAll(
    paginationVehicleDto: PaginationVehicleDto,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    return this.repository.findAll(paginationVehicleDto, searchVehicleDto)
  }

  findAllOfUser(
    id: string,
    paginationVehicleDto: PaginationVehicleDto,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    return this.repository.findAllOfUser(
      id,
      paginationVehicleDto,
      searchVehicleDto,
    )
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
