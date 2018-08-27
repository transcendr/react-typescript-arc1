/**
 * API requests utility
 */

export interface RequestHandlerOptions {
  url: string
  type?: string
  body?: {}
}

export interface RequestHandlerResponse {
  status: number
  data?: {}
  error?: string
}
export const request = (options: RequestHandlerOptions) => {
  const req = async () => {
    try {
      const res = await fetch(options.url)
      const data = await res.json()
      return {
        status: 1,
        data,
      }
    } catch (e) {
      return {
        status: 0,
        error: e.message,
      }
    }
  }
  return req()
}
