import { Injectable } from '@nestjs/common'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'

@Injectable()
export class VehiclesService {
  create(createVehicleDto: CreateVehicleDto) {
    return { method: 'create', createVehicleDto }
  }

  findAll() {
    return { method: 'findAll' }
  }

  findOne(id: string) {
    return { method: 'findOne', id }
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return {
      method: 'update',
      id,
      updateVehicleDto,
    }
  }

  remove(id: string) {
    return { method: 'remove', id }
  }
}
