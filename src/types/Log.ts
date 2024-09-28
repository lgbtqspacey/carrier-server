/* eslint-disable @typescript-eslint/no-explicit-any */
export type Tag =
  'controller'
  | 'service'
  | 'application'
  | 'database'
  | 'middleware'
  | 'error'
  | 'error_handler'
  | 'router'
  | 'auth'
  | 'cron'

export type LogInfo = {
  message: string
  tag: Tag
  timestamp: string
  level: 'debug' | 'info' | 'warn' | 'error'
  details?: string
  stacktrace?: any
}
