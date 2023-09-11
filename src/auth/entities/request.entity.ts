import { Request } from 'express'
import { UserFromJwt } from './user.entity'

export class AuthRequest extends Request {
  user: UserFromJwt
}
