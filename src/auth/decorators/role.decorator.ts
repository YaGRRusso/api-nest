import { Role as RoleInterface } from '@interfaces/role.interface'
import { SetMetadata } from '@nestjs/common'

export const Role = (role: RoleInterface) => {
  return SetMetadata('role', role)
}
