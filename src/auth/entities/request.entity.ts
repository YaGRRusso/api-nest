import { Output } from '@interfaces/output.interface'
import { Request } from 'express'
import { User } from 'src/users/entities/user.entity'

export class AuthRequest extends Request {
  user: Output<User>
}
