import { CorsOptions } from 'cors'

export default interface IConfig {
  name: string
  use_database: boolean
  wipe_db_on_start: boolean
  migrate_db_on_start: boolean
  seed_db_on_start: boolean
  public_url: string
  client_url: string
  cors: CorsOptions
}

export interface IMySQL {
  host: string
  user: string
  password: string
  database: string
}
