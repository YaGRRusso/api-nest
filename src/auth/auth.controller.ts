import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/login-user.dto'
import { ControllerOutput } from '@interfaces/output.interface'
import { JwtGuard } from './guards/jwt.guard'
import { AuthRequest } from './entities/request.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() body: LoginUserDto): ControllerOutput<string> {
    return {
      data: await this.authService.login(body.email, body.password),
      error: null,
    }
  }

  @UseGuards(JwtGuard)
  @Post('validate')
  async validate(@Req() req: AuthRequest): ControllerOutput<any> {
    return {
      data: req.user,
      error: null,
    }
  }
}
