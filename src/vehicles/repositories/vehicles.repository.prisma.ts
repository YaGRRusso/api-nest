import { Injectable } from '@nestjs/common'
import { VehiclesRepository } from './vehicles.repository.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { PrismaService } from '@database/prisma.service'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { Pagination } from '@interfaces/input.interface'

@Injectable()
export class PrismaVehiclesRepository implements VehiclesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle> {
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.vehicle.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
          orderBy: { ...pagination.orderBy },
        }),
      },
      error: null,
    }
  }

  async findAllOfUser(
    id: string,
    pagination: Pagination,
  ): PaginatedOutput<Vehicle> {
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.vehicle.findMany({
          where: { userId: id },
          skip: (page - 1) * perPage,
          take: perPage,
        }),
      },
      error: null,
    }
  }

  async create(data: CreateVehicleDto): Output<Vehicle> {
    return {
      data: await this.prisma.vehicle.create({
        data,
      }),
      error: null,
    }
  }

  async findOne(id: string): Output<Vehicle> {
    return {
      data: await this.prisma.vehicle.findUnique({
        where: { id },
      }),
      error: null,
    }
  }

  async remove(id: string): Output<Vehicle> {
    return {
      data: await this.prisma.vehicle.delete({
        where: { id },
      }),
      error: null,
    }
  }

  async update(id: string, data: UpdateVehicleDto): Output<Vehicle> {
    return {
      data: await this.prisma.vehicle.update({
        where: { id },
        data,
      }),
      error: null,
    }
  }
}
