import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { VehiclesModule } from './vehicles/vehicles.module'
import { PrismaModule } from '@database/prisma.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [PrismaModule, UsersModule, VehiclesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
