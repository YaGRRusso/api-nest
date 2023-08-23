import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'

@Injectable()
export class VehiclesService {
  constructor(private repository: PrismaVehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.repository.create(createVehicleDto)
  }

  findAll() {
    return this.repository.findAll()
  }

  findOne(id: string) {
    return this.repository.findOne(id)
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.repository.update(id, updateVehicleDto)
  }

  remove(id: string) {
    return this.repository.remove(id)
  }
}
