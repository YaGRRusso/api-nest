type Paginated<T = unknown> = {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: T[]
}

export type RepoPaginatedOutput<T = unknown> = Promise<Paginated<T>>
export type RepoOutput<T = unknown> = Promise<T>

export type Output<T = unknown> = Promise<{
  data: T | null
  error: any | null
}>

export type PaginatedOutput<T = unknown> = Promise<{
  data: Paginated<T> | null
  error: any | null
}>
