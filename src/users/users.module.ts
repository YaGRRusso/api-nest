import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { PrismaService } from '@database/prisma.service'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PrismaUsersRepository],
})
export class UsersModule {}
