export type Pagination<T = Record<string, unknown>> = {
  page?: string
  orderBy?: 'asc' | 'desc'
  sortBy?: keyof T
}

export type Search<T = unknown> = Partial<T>

export type Update<T = unknown> = Partial<T>

export type Create<T = unknown> = Partial<T>
