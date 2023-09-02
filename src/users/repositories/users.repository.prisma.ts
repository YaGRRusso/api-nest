import { PrismaService } from '@database/prisma.service'
import { User } from '../entities/user.entity'
import { UsersRepository } from './users.repository.interface'
import { Injectable } from '@nestjs/common'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { PrismaOrderBy } from '@database/prisma.interface'
import { parseSearchToPrisma } from '@helpers/search.helper'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'
import { MapperService } from '@mappers/mapper.service'
import { ClassConstructor } from 'class-transformer'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  private readonly entity: ClassConstructor<User>
  private readonly mapper: MapperService

  constructor(private prisma: PrismaService) {
    this.mapper = new MapperService()
  }

  async findAll(pagination: Pagination<User>): PaginatedOutput<User> {
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.user.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<User> = {
      [pagination.sortBy]: pagination.orderBy,
    }

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.user.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
          orderBy,
        }),
      },
      error: null,
    }
  }

  async searchAll(
    pagination: Pagination<User>,
    search: Search,
  ): PaginatedOutput<User> {
    const where = parseSearchToPrisma(search)
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.user.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<User> = {
      [pagination.sortBy]: pagination.orderBy,
    }
    const items = await this.prisma.user.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy,
      where,
    })

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items,
      },
      error: null,
    }
  }

  async create(data: Create<User>): Output<User> {
    const payload = this.mapper.toInstance(data, this.entity)
    const result = await this.prisma.user.create({ data: payload })

    return {
      data: result,
      error: null,
    }
  }

  async findOne(id: string): Output<User> {
    return {
      data: await this.prisma.user.findUnique({
        where: { id },
      }),
      error: null,
    }
  }

  async remove(id: string): Output<User> {
    return {
      data: await this.prisma.user.delete({
        where: { id },
      }),
      error: null,
    }
  }

  async update(id: string, data: Update<User>): Output<User> {
    return {
      data: await this.prisma.user.update({
        where: { id },
        data,
      }),
      error: null,
    }
  }
}
