import { Module } from '@nestjs/common'
import { VehiclesService } from './vehicles.service'
import { VehiclesController } from './vehicles.controller'
import { PrismaService } from '@database/prisma.service'
import { PrismaVehiclesRepository } from './repositories/vehicles.repository.prisma'

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, PrismaService, PrismaVehiclesRepository],
})
export class VehiclesModule {}
