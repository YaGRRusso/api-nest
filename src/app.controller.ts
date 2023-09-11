import { Controller, Get, Param, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { IsPublic } from './auth/decorators/public.decorator'
import { CurrentUser } from './auth/decorators/current-user.decorator'
import { Output } from '@interfaces/output.interface'
import { User } from './users/entities/user.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello() {
    return this.appService.getHello()
  }

  @Get('me')
  async getMe(@CurrentUser() user: Output<User>) {
    return user
  }

  @Post('seed')
  seedOne() {
    return this.appService.seed()
  }

  @Post('seed/:count')
  seed(@Param('count') count: string) {
    return this.appService.seed(+count)
  }
}
