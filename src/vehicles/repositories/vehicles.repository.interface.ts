import { Vehicle } from '../entities/vehicle.entity'
import { CommonRepositoryInterface } from '@interfaces/repository.interface'

export interface VehiclesRepositoryInterface
  extends CommonRepositoryInterface<Vehicle> {}
