export type Pagination<T = never> = {
  page?: string
  orderBy?: {
    [key in keyof T]?: 'asc' | 'desc'
  }
}
