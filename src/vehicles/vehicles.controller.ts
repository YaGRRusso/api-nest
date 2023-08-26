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

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto)
  }

  @Get()
  findAll(@Query() paginationVehicleDto: PaginationVehicleDto) {
    return this.vehiclesService.findAll(paginationVehicleDto)
  }

  @Get('search')
  searchAll(
    @Query() paginationVehicleDto: PaginationVehicleDto,
    @Body() searchVehicleDto: SearchVehicleDto,
  ) {
    return this.vehiclesService.searchAll(
      paginationVehicleDto,
      searchVehicleDto,
    )
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id)
  }

  @Get('user/:id')
  findAllOfUser(
    @Param('id') id: string,
    @Query() paginationVehicleDto: PaginationVehicleDto,
  ) {
    return this.vehiclesService.findAllOfUser(id, paginationVehicleDto)
  }

  @Get('user/:id/search')
  searchAllOfUser(
    @Param('id') id: string,
    @Query() paginationVehicleDto: PaginationVehicleDto,
    @Body() searchVehicleDto: SearchVehicleDto,
  ) {
    return this.vehiclesService.searchAllOfUser(
      id,
      paginationVehicleDto,
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
