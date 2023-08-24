import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator'

@ValidatorConstraint()
class IsFullNameValidation implements ValidatorConstraintInterface {
  validate(value: string) {
    return value.trim().split(' ').length >= 2
  }
}

export const IsFullName = (validationOptions?: ValidationOptions) => {
  return (object: any, propertyName: string) => {
    registerDecorator({
      name: 'isFullName',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message:
          validationOptions?.message ?? 'name must contain name and last name',
      },
      validator: IsFullNameValidation,
    })
  }
}
