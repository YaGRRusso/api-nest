import { PrismaService } from '@database/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'
import { UsersRepository } from './users.repository.interface'
import { Injectable } from '@nestjs/common'
import { Output, PaginatedOutput } from '@interfaces/output.interface'
import { PaginationDto } from '@dtos/pagination.dto'
import { PrismaOrderBy } from '@database/prisma.interface'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(paginationDto: PaginationDto<User>): PaginatedOutput<User> {
    const page = paginationDto?.page ? +paginationDto.page : 1
    const perPage = 10
    const totalItems = await this.prisma.user.count()
    const totalPages = Math.ceil(totalItems / 10)
    const orderBy: PrismaOrderBy<User> = {
      [paginationDto.sortBy]: paginationDto.orderBy,
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

  async create(data: CreateUserDto): Output<User> {
    return {
      data: await this.prisma.user.create({
        data,
      }),
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

  async update(id: string, data: UpdateUserDto): Output<User> {
    return {
      data: await this.prisma.user.update({
        where: { id },
        data,
      }),
      error: null,
    }
  }
}
