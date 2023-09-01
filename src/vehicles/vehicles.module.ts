import { Module } from '@nestjs/common'
import { VehiclesService } from './vehicles.service'
import { VehiclesController } from './vehicles.controller'
import { PrismaService } from '@database/prisma.service'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'
import { MapperModule } from '@mappers/mapper.module'

@Module({
  imports: [MapperModule],
  controllers: [VehiclesController],
  providers: [VehiclesService, PrismaService, PrismaVehiclesRepository],
})
export class VehiclesModule {}
