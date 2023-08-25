export type Output<T = unknown> = Promise<{
  data: T | null
  error: any | null
}>

export type PaginatedOutput<T = unknown> = Promise<{
  data: {
    page: number
    perPage: number
    totalPages: number
    totalItems: number
    items: T[]
  } | null
  error: any | null
}>
