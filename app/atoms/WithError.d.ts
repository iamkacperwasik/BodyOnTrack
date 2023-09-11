export type WithError<T> = {
  value: T | null
  error: string | null
}

export type WithErrorNumberOrNull = WithError<number | null>
