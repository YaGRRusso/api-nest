import { Injectable } from '@nestjs/common'
import { VehiclesRepository } from './vehicles.repository.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { PrismaService } from '@database/prisma.service'

@Injectable()
export class PrismaVehiclesRepository implements VehiclesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Vehicle[]> {
    return await this.prisma.vehicle.findMany()
  }

  async create(data: CreateVehicleDto): Promise<Vehicle> {
    return await this.prisma.vehicle.create({
      data,
    })
  }

  async findOne(id: string): Promise<Vehicle> {
    return await this.prisma.vehicle.findUnique({
      where: { id },
    })
  }

  async remove(id: string): Promise<Vehicle> {
    return await this.prisma.vehicle.delete({
      where: { id },
    })
  }

  async update(id: string, data: UpdateVehicleDto): Promise<Vehicle> {
    return await this.prisma.vehicle.update({
      where: { id },
      data,
    })
  }
}
