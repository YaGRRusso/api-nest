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
import { Prisma } from '@prisma/client'

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
      page,
      perPage,
      totalItems,
      totalPages,
      items: await this.prisma.vehicle.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        orderBy,
      }),
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
    }
  }

  async searchOne(search: Search<Vehicle>): Output<Vehicle> {
    const where = parseSearchToPrisma(search)
    return await this.prisma.vehicle.findFirst({
      where,
    })
  }

  async create(data: Create<Vehicle>): Output<Vehicle> {
    const payload = this.mapper.toInstance(data, this.entity)
    return await this.prisma.vehicle.create({ data: payload })
  }

  async remove(id: string): Output<Vehicle> {
    return await this.prisma.vehicle.delete({
      where: { id },
    })
  }

  async update(id: string, data: Update<Vehicle>): Output<Vehicle> {
    return await this.prisma.vehicle.update({
      where: { id },
      data,
    })
  }

  async findOne(where: Search<Vehicle>): Output<Vehicle> {
    return await this.prisma.vehicle.findUnique({
      where: where as Prisma.VehicleWhereUniqueInput,
    })
  }
}
