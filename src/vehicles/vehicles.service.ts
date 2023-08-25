import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'
import { PaginationDto } from '@dtos/pagination.dto'
import { SearchVehicleDto } from './dto/search-vehicle.dto'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto): Output<Vehicle> {
    return this.repository.create(createVehicleDto)
  }

  findAll(
    paginationDto: PaginationDto<Vehicle>,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    return this.repository.findAll(paginationDto, {
      ...searchVehicleDto,
      year: +searchVehicleDto.year,
    })
  }

  findAllOfUser(
    id: string,
    paginationDto: PaginationDto<Vehicle>,
    searchVehicleDto?: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    return this.repository.findAllOfUser(id, paginationDto, {
      ...searchVehicleDto,
      year: +searchVehicleDto.year,
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
