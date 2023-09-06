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
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PaginationUserDto } from './dto/pagination-user.dto'
import { SearchUserDto } from './dto/search-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { IsPublic } from 'src/auth/decorators/public.decorator'
import { User } from './entities/user.entity'
import {
  ControllerOutput,
  ControllerPaginatedOutput,
} from '@interfaces/output.interface'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto): ControllerOutput<User> {
    return { data: await this.usersService.create(createUserDto), error: null }
  }

  @Get()
  async findAll(
    @Query() paginationUserDto: PaginationUserDto,
  ): ControllerPaginatedOutput<User> {
    return {
      data: await this.usersService.findAll(paginationUserDto),
      error: null,
    }
  }

  @Get('search')
  async searchAll(
    @Query() paginationUserDto: PaginationUserDto,
    @Body() searchUserDto: SearchUserDto,
  ): ControllerPaginatedOutput<User> {
    return {
      data: await this.usersService.searchAll(paginationUserDto, searchUserDto),
      error: null,
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): ControllerOutput<User> {
    return {
      data: await this.usersService.update(id, updateUserDto),
      error: null,
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): ControllerOutput<User> {
    return { data: await this.usersService.remove(id), error: null }
  }
}
