import { INestApplication } from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'
import { AppFilter } from 'src/app.filter'

export const filtersConfig = (app: INestApplication) => {
  const { httpAdapter } = app.get(HttpAdapterHost)
  return app.useGlobalFilters(new AppFilter(httpAdapter))
}
