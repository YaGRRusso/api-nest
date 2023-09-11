import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/login-user.dto'
import { ControllerOutput } from '@interfaces/output.interface'
import { JwtGuard } from './guards/jwt.guard'
import { AuthRequest } from './entities/request.entity'
import { Role } from './decorators/role.decorator'
import { RoleGuard } from './guards/role.guard'

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
  @Get('me')
  async me(@Req() req: AuthRequest): ControllerOutput<any> {
    return {
      data: req.user,
      error: null,
    }
  }

  @Role('ADMIN')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('validate')
  async validate(@Req() req: AuthRequest): ControllerOutput<any> {
    return {
      data: req.user.role,
      error: null,
    }
  }
}
