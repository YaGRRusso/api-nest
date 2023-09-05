import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalGuard } from './guards/local.guard'
import { LoginUserDto } from './dto/login-user.dto'
import { AuthRequest } from './entities/request.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalGuard)
  async login(@Request() req: AuthRequest) {
    const { data } = await req.user
    return this.authService.login(data)
  }

  @Post('validate')
  @UseGuards(LocalGuard)
  async validate(@Body() auth: LoginUserDto) {
    return this.authService.validate(auth.email, auth.password)
  }
}
