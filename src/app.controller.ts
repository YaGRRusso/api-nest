import { Controller, Get, Param, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello() {
    return this.appService.getHello()
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
