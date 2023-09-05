import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { PrismaService } from '@database/prisma.service'
import { PrismaUsersRepository } from './repositories/users.repository.prisma'
import { MapperModule } from '@mappers/mapper.module'
@Module({
  imports: [MapperModule],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, PrismaUsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
