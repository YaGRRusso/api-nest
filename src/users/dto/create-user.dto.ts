import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  @Length(11, 11)
  cpf: string

  @IsOptional()
  @IsString()
  @Length(11, 11)
  phone?: string

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string
}
