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
  login(@Body() auth: LoginUserDto, @Request() req: AuthRequest) {
    console.log(req.user)
    return this.authService.login(auth.email, auth.password)
  }
}
