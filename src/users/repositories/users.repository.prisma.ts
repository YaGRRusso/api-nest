import { PrismaService } from '@database/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'
import { UsersRepository } from './users.repository.interface'
import { Injectable } from '@nestjs/common'
import { Output } from '@interfaces/output.interface'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Output<User[]> {
    try {
      return {
        data: await this.prisma.user.findMany(),
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e,
      }
    }
  }

  async create(data: CreateUserDto): Output<User> {
    try {
      return {
        data: await this.prisma.user.create({
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

  async findOne(id: string): Output<User> {
    try {
      return {
        data: await this.prisma.user.findUnique({
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

  async remove(id: string): Output<User> {
    try {
      return {
        data: await this.prisma.user.delete({
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

  async update(id: string, data: UpdateUserDto): Output<User> {
    try {
      return {
        data: await this.prisma.user.update({
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
