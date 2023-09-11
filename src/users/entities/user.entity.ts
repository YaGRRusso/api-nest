import { Role } from '@interfaces/role.interface'

export class User {
  id: string = null
  name: string = null
  cpf: string = null
  role: Role
  phone?: string = null
  email: string = null
  password: string = null
  createdAt: Date = null
  updatedAt: Date = null
}
