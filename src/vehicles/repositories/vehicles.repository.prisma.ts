import { Injectable } from '@nestjs/common'
import { VehiclesRepositoryInterface } from './vehicles.repository.interface'
import { Vehicle } from '../entities/vehicle.entity'
import { PrismaService } from '@database/prisma.service'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { PrismaOrderBy } from '@database/prisma.interface'
import { parseSearchToPrisma } from '@helpers/search.helper'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'
import { MapperService } from '@mappers/mapper.service'
import { ClassConstructor } from 'class-transformer'

@Injectable()
export class PrismaVehiclesRepository implements VehiclesRepositoryInterface {
  private readonly entity: ClassConstructor<Vehicle>
  private readonly mapper: MapperService

  constructor(private prisma: PrismaService) {
    this.mapper = new MapperService()
  }

  async findAll(pagination: Pagination<Vehicle>): PaginatedOutput<Vehicle> {
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [pagination.sortBy]: pagination.orderBy,
    }

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.vehicle.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
          orderBy,
        }),
      },
      error: null,
    }
  }

  async searchAll(
    pagination: Pagination<Vehicle>,
    search: Search<Vehicle>,
  ): PaginatedOutput<Vehicle> {
    const where = parseSearchToPrisma(search)
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count({ where })
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [pagination.sortBy]: pagination.orderBy,
    }

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.vehicle.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
          orderBy,
          where,
        }),
      },
      error: null,
    }
  }

  async create(data: Create<Vehicle>): Output<Vehicle> {
    const payload = this.mapper.toInstance(data, this.entity)
    const result = await this.prisma.vehicle.create({ data: payload })

    return {
      data: result,
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

  async update(id: string, data: Update<Vehicle>): Output<Vehicle> {
    return {
      data: await this.prisma.vehicle.update({
        where: { id },
        data,
      }),
      error: null,
    }
  }
}
