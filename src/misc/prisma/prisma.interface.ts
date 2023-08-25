export type PrismaOrderBy<T> = {
  [key in keyof T]?: 'asc' | 'desc'
}
