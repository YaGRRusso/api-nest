import * as dotenv from 'dotenv'

dotenv.config()

export const appConfig = {
  port: Number(process.env.PORT) ?? 8080,
  host: process.env.HOST ?? '0.0.0.0',
}
