import { Role } from '@interfaces/role.interface'

export class UserFromJwt {
  id: string
  email: string
  name: string
  role: Role
}
