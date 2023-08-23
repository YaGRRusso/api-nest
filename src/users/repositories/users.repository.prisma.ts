import { PrismaService } from '@database/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'
import { UsersRepository } from './users.repository.interface'
import { Injectable } from '@nestjs/common'
import {
  Output,
  PaginatedOutput,
  Pagination,
} from '@interfaces/output.interface'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(pagination: Pagination): PaginatedOutput<User> {
    const page = pagination?.page ? +pagination.page : 1
    const perPage = 10
    const totalItems = await this.prisma.user.count()
    const totalPages = Math.ceil(totalItems / 10)

    return {
      data: {
        page,
        perPage,
        totalItems,
        totalPages,
        items: await this.prisma.user.findMany({
          skip: (page - 1) * perPage,
          take: perPage,
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
