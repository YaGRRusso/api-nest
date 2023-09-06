import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { AuthRequest } from '../entities/request.entity'
import { Output } from '@interfaces/output.interface'
import { User } from 'src/users/entities/user.entity'

export const CurrentUser = createParamDecorator(
  async (data: unknown, context: ExecutionContext): Output<User> => {
    const request = context.switchToHttp().getRequest<AuthRequest>()
    return request.user
  },
)
