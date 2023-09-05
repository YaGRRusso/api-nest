import { Output } from '@interfaces/output.interface'
import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcrypt'
import { excludeOne } from '@helpers/exclude.helper'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(email: string, password: string): Output<any> {
    const user = await this.usersService.findOne({ email })

    if (user.data) {
      const isPasswordValid = await bcrypt.compare(password, user.data.password)
      if (isPasswordValid)
        return { data: excludeOne(user.data, 'password'), error: null }
    }
  }
}
