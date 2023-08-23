import { Injectable } from '@nestjs/common'
import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!'
  }

  async seed() {
    const prisma = new PrismaClient()

    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        cpf: faker.string.numeric(11),
        phone: faker.helpers.maybe(() => faker.phone.number('###########'), {
          probability: 0.7,
        }),
        email: faker.internet.email(),
        Vehicle: {
          create: faker.helpers.multiple(
            () => ({
              plate:
                faker.string.alpha({ length: 3, casing: 'upper' }) +
                faker.string.numeric(4),
              name: faker.vehicle.vehicle(),
              year: faker.date.anytime().getFullYear(),
            }),
            { count: faker.number.int({ min: 0, max: 3 }) },
          ),
        },
      },
    })

    return user
  }
}
