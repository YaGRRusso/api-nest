import { Output } from '@interfaces/output.interface'
import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcrypt'
import { excludeOne } from '@helpers/exclude.helper'
import { User } from 'src/users/entities/user.entity'
import { UserPayload } from './entities/payload.entity'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Output<string> {
    const user = await this.validate(email, password)

    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    }

    return this.jwtService.sign(payload)
  }

  async validate(email: string, password: string): Output<User> {
    const user = await this.usersService.findOne({ email })

    if (user) {
      if (await bcrypt.compare(password, user.password))
        return excludeOne(user, 'password')
    }
  }
}
