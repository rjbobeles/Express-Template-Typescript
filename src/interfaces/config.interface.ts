import { CorsOptions } from 'cors'

export default interface IConfig {
  name: string
  public_url: string
  client_url: string
  cors: CorsOptions
}
