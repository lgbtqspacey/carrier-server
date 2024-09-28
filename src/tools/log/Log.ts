import { LogInfo, Tag } from '../../types/Log'

export default class Log {
  private static readonly _timestamp = new Date().toISOString()
  private static readonly _separator = '\n----------------------------------------------------------------\n'

  public static readonly debug = (tag: Tag, message: string, details?: object): void => {
    const log: LogInfo = {
      message: this._maskData(message), 
      tag: tag,
      timestamp: this._timestamp,
      level: 'debug',
    }
    if (details) log.details = this._maskData(details)

    console.debug(this._separator, 'debug:', log)
  }

  public static readonly info = (tag: Tag, message: string, details?: object): void => {
    const log: LogInfo = {
      message: this._maskData(message), 
      tag: tag,
      timestamp: this._timestamp,
      level: 'info',
    }
    if (details) log.details = this._maskData(details)

    console.info(this._separator, 'info:', log)
  }

  public static readonly warn = (tag: Tag, message: string): void => {
    const log: LogInfo = {
      message: this._maskData(message), 
      tag: tag,
      timestamp: this._timestamp,
      level: 'warn',
    }

    console.warn(this._separator, 'warn:', log)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static readonly error = (tag: Tag, message: string, error: any): void => {
    const log: LogInfo = {
      message: this._maskData(message), 
      tag: tag,
      timestamp: this._timestamp,
      level: 'error',
      stacktrace: this._maskData(error.stack), 
    }

    console.error(this._separator, 'error:', log)
  }

  private static readonly _maskData = (data: string | object): string => {
    const dataToString = typeof data !== 'string' ? JSON.stringify(data) : data
  
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/
  
    return dataToString
      .replace(emailPattern, '**********')
  }
}
