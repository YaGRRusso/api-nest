import { Injectable } from '@nestjs/common'
import { VehiclesRepository } from './vehicles.repository.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { PrismaService } from '@database/prisma.service'
import { Output } from '@interfaces/output.interface'

@Injectable()
export class PrismaVehiclesRepository implements VehiclesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Output<Vehicle[]> {
    try {
      return { data: await this.prisma.vehicle.findMany(), error: null }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async findAllOfUser(id: string): Output<Vehicle[]> {
    try {
      return {
        data: await this.prisma.vehicle.findMany({ where: { userId: id } }),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async create(data: CreateVehicleDto): Output<Vehicle> {
    try {
      return {
        data: await this.prisma.vehicle.create({
          data,
        }),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async findOne(id: string): Output<Vehicle> {
    try {
      return {
        data: await this.prisma.vehicle.findUnique({
          where: { id },
        }),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async remove(id: string): Output<Vehicle> {
    try {
      return {
        data: await this.prisma.vehicle.delete({
          where: { id },
        }),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async update(id: string, data: UpdateVehicleDto): Output<Vehicle> {
    try {
      return {
        data: await this.prisma.vehicle.update({
          where: { id },
          data,
        }),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }
}
