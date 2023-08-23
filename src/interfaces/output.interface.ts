export type Output<T = unknown> = Promise<{
  data: T | null
  error: any | null
}>
