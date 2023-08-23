import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'

export abstract class VehiclesRepository {
  abstract findAll(): Promise<Vehicle[]>
  abstract create(data: CreateVehicleDto): Promise<Vehicle>
  abstract findOne(id: string): Promise<Vehicle>
  abstract remove(id: string): Promise<Vehicle>
  abstract update(id: string, data: UpdateVehicleDto): Promise<Vehicle>
}
