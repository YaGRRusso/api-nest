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

  async login(user: User): Output<string> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    }

    const token = this.jwtService.sign(payload)
    return token
  }

  async validate(email: string, password: string): Output<User> {
    const user = await this.usersService.findOne({ email })

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (isPasswordValid) return excludeOne(user, 'password')
    }
  }
}
