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
import { PaginationDto } from '@dtos/pagination.dto'
import { Vehicle } from './entities/vehicle.entity'
import { SearchVehicleDto } from './dto/search-vehicle.dto'

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto)
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto<Vehicle>) {
    return this.vehiclesService.findAll(paginationDto)
  }

  @Get('search')
  searchAll(
    @Query() paginationDto: PaginationDto<Vehicle>,
    @Body() searchVehicleDto: SearchVehicleDto,
  ) {
    return this.vehiclesService.findAll(paginationDto, searchVehicleDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id)
  }

  @Get('user/:id')
  findAllOfUser(
    @Param('id') id: string,
    @Query() paginationDto: PaginationDto<Vehicle>,
  ) {
    return this.vehiclesService.findAllOfUser(id, paginationDto)
  }

  @Get('user/:id/search')
  searchAllOfUser(
    @Param('id') id: string,
    @Query() paginationDto: PaginationDto<Vehicle>,
    @Body() searchVehicleDto: SearchVehicleDto,
  ) {
    return this.vehiclesService.findAllOfUser(
      id,
      paginationDto,
      searchVehicleDto,
    )
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id)
  }
}
