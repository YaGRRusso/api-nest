import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LocalGuard } from './guards/local.guard'
import { LoginUserDto } from './dto/login-user.dto'
import { AuthRequest } from './entities/request.entity'
import { ControllerOutput } from '@interfaces/output.interface'
import { User } from 'src/users/entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UseGuards(LocalGuard)
  async login(@Request() req: AuthRequest): ControllerOutput<string> {
    return { data: await this.authService.login(await req.user), error: null }
  }

  @Post('validate')
  @UseGuards(LocalGuard)
  async validate(@Body() auth: LoginUserDto): ControllerOutput<User> {
    return {
      data: await this.authService.validate(auth.email, auth.password),
      error: null,
    }
  }
}
