import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { VehiclesService } from './vehicles.service'
import { CreateVehicleDto } from './dto/create-vehicle.dto'
import { UpdateVehicleDto } from './dto/update-vehicle.dto'
import { PaginationVehicleDto } from './dto/pagination-vehicle.dto'
import { SearchVehicleDto } from './dto/search-vehicle.dto'
import { ApiTags } from '@nestjs/swagger'
import { Vehicle } from './entities/vehicle.entity'
import {
  ControllerOutput,
  ControllerPaginatedOutput,
} from '@interfaces/output.interface'

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  async create(
    @Body() createVehicleDto: CreateVehicleDto,
  ): ControllerOutput<Vehicle> {
    return {
      data: await this.vehiclesService.create(createVehicleDto),
      error: null,
    }
  }

  @Get()
  async findAll(
    @Query() paginationVehicleDto: PaginationVehicleDto,
  ): ControllerPaginatedOutput<Vehicle> {
    return {
      data: await this.vehiclesService.findAll(paginationVehicleDto),
      error: null,
    }
  }

  @Get('search')
  async searchAll(
    @Query() paginationVehicleDto: PaginationVehicleDto,
    @Body() searchVehicleDto: SearchVehicleDto,
  ): ControllerPaginatedOutput<Vehicle> {
    return {
      data: await this.vehiclesService.searchAll(
        paginationVehicleDto,
        searchVehicleDto,
      ),
      error: null,
    }
  }

  @Get('user/:id')
  async findAllOfUser(
    @Param('id') id: string,
    @Query() paginationVehicleDto: PaginationVehicleDto,
  ): ControllerPaginatedOutput<Vehicle> {
    return {
      data: await this.vehiclesService.findAllOfUser(id, paginationVehicleDto),
      error: null,
    }
  }

  @Get('user/:id/search')
  async searchAllOfUser(
    @Param('id') id: string,
    @Query() paginationVehicleDto: PaginationVehicleDto,
    @Body() searchVehicleDto: SearchVehicleDto,
  ): ControllerPaginatedOutput<Vehicle> {
    return {
      data: await this.vehiclesService.searchAllOfUser(
        id,
        paginationVehicleDto,
        searchVehicleDto,
      ),
      error: null,
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ): ControllerOutput<Vehicle> {
    return {
      data: await this.vehiclesService.update(id, updateVehicleDto),
      error: null,
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): ControllerOutput<Vehicle> {
    return { data: await this.vehiclesService.remove(id), error: null }
  }
}
