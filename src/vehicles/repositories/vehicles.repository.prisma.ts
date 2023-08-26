import { Injectable } from '@nestjs/common'
import { VehiclesRepository } from './vehicles.repository.interface'
import { CreateVehicleDto } from '../dto/create-vehicle.dto'
import { UpdateVehicleDto } from '../dto/update-vehicle.dto'
import { Vehicle } from '../entities/vehicle.entity'
import { PrismaService } from '@database/prisma.service'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { PaginationVehicleDto } from '../dto/pagination-vehicle.dto'
import { PrismaOrderBy } from '@database/prisma.interface'
import { SearchVehicleDto } from '../dto/search-vehicle.dto'
import { parseSearchDtoToPrisma } from '@helpers/search.helper'

@Injectable()
export class PrismaVehiclesRepository implements VehiclesRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(
    paginationVehicleDto: PaginationVehicleDto,
  ): PaginatedOutput<Vehicle> {
    const page = paginationVehicleDto?.page ? +paginationVehicleDto.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [paginationVehicleDto.sortBy]: paginationVehicleDto.orderBy,
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
    paginationVehicleDto: PaginationVehicleDto,
    searchVehicleDto: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    const where = parseSearchDtoToPrisma(searchVehicleDto)
    const page = paginationVehicleDto?.page ? +paginationVehicleDto.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [paginationVehicleDto.sortBy]: paginationVehicleDto.orderBy,
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

  async findAllOfUser(
    id: string,
    paginationVehicleDto: PaginationVehicleDto,
  ): PaginatedOutput<Vehicle> {
    const page = paginationVehicleDto?.page ? +paginationVehicleDto.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [paginationVehicleDto.sortBy]: paginationVehicleDto.orderBy,
    }

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
          orderBy,
        }),
      },
      error: null,
    }
  }

  async searchAllOfUser(
    id: string,
    paginationVehicleDto: PaginationVehicleDto,
    searchVehicleDto: SearchVehicleDto,
  ): PaginatedOutput<Vehicle> {
    const where = parseSearchDtoToPrisma(searchVehicleDto)
    const page = paginationVehicleDto?.page ? +paginationVehicleDto.page : 1
    const perPage = 10
    const totalItems = await this.prisma.vehicle.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<Vehicle> = {
      [paginationVehicleDto.sortBy]: paginationVehicleDto.orderBy,
    }

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.vehicle.findMany({
          where: { userId: id, ...where },
          skip: (page - 1) * perPage,
          take: perPage,
          orderBy,
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
