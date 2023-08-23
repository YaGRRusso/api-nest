import { PrismaService } from '@database/prisma.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { User } from '../entities/user.entity'
import { UsersRepository } from './users.repository.interface'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

  async create(data: CreateUserDto): Promise<User> {
    return await this.prisma.user.create({
      data,
    })
  }

  async findOne(id: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
    })
  }

  async remove(id: string): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
    })
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data,
    })
  }
}
