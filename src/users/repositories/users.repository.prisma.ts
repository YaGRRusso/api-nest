import { PrismaService } from '@database/prisma.service'
import { User } from '../entities/user.entity'
import { UsersRepositoryInterface } from './users.repository.interface'
import { Injectable } from '@nestjs/common'
import { RepoOutput, RepoPaginatedOutput } from '@interfaces/output.interface'
import { PrismaOrderBy } from '@database/prisma.interface'
import { parseSearchToPrisma } from '@helpers/search.helper'
import { Create, Pagination, Search, Update } from '@interfaces/input.interface'
import { MapperService } from '@mappers/mapper.service'
import { ClassConstructor } from 'class-transformer'
import { excludeMany, excludeOne } from '@helpers/exclude.helper'

@Injectable()
export class PrismaUsersRepository implements UsersRepositoryInterface {
  private readonly entity: ClassConstructor<User>
  private readonly mapper: MapperService

  constructor(private prisma: PrismaService) {
    this.mapper = new MapperService()
  }

  async findAll(pagination: Pagination<User>): RepoPaginatedOutput<User> {
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
    })

    return {
      page,
      perPage,
      totalItems,
      totalPages,
      items: excludeMany(items, 'password'),
    }
  }

  async searchAll(
    pagination: Pagination<User>,
    search: Search,
  ): RepoPaginatedOutput<User> {
    const where = parseSearchToPrisma(search)
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.user.count({ where })
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
      page,
      perPage,
      totalItems,
      totalPages,
      items: excludeMany(items, 'password'),
    }
  }

  async create(data: Create<User>): RepoOutput<User> {
    const payload = this.mapper.toInstance(data, this.entity)
    const item = await this.prisma.user.create({ data: payload })
    return excludeOne(item, 'password')
  }

  async findOne(id: string): RepoOutput<User> {
    const item = await this.prisma.user.findUnique({
      where: { id },
    })
    return excludeOne(item, 'password')
  }

  async remove(id: string): RepoOutput<User> {
    const item = await this.prisma.user.delete({
      where: { id },
    })
    return excludeOne(item, 'password')
  }

  async update(id: string, data: Update<User>): RepoOutput<User> {
    const item = await this.prisma.user.update({
      where: { id },
      data,
    })
    return excludeOne(item, 'password')
  }
}
