import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { Output } from '@interfaces/output.interface'
import { Vehicle } from './entities/vehicle.entity'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto): Output<Vehicle> {
    return this.repository.create(createVehicleDto)
  }

  findAll(): Output<Vehicle[]> {
    return this.repository.findAll()
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
