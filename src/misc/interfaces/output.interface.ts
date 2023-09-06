type Paginated<T = unknown> = {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: T[]
}

export type PaginatedOutput<T = unknown> = Promise<Paginated<T>>
export type Output<T = unknown> = Promise<T>

export type ControllerPaginatedOutput<T = unknown> = Promise<{
  data: Paginated<T> | null
  error: any | null
}>
export type ControllerOutput<T = unknown> = Promise<{
  data: T | null
  error: any | null
}>
