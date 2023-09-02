import { PartialType } from '@nestjs/swagger'
import { CreateVehicleDto } from './create-vehicle.dto'
import { Update } from '@interfaces/input.interface'
import { User } from 'src/users/entities/user.entity'

export class UpdateVehicleDto
  extends PartialType(CreateVehicleDto)
  implements Update<User> {}
