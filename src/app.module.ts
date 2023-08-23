import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { VehiclesModule } from './vehicles/vehicles.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [PrismaModule, UsersModule, VehiclesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
