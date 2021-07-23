import dotenv from 'dotenv'

import IConfig, { IMySQL } from './interfaces/config.interface'

dotenv.config()

/**
 * @property SETTINGS_DEVELOPMENT
 * @description Application settings if NODE_ENV is 'dev'
 * @implements IConfig
 * @returns object
 */

const SETTINGS_DEVELOPMENT: IConfig = {
  name: 'development',
  use_database: false,
  wipe_db_on_start: false,
  migrate_db_on_start: false,
  seed_db_on_start: false,
  public_url: 'http://localhost:3000',
  client_url: 'http://localhost:3000',
  cors: {
    origin: '*',
    allowedHeaders: ['X-Requested-With', 'content-type'],
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
}

/**
 * @property SETTINGS_MOCHA_TESTING
 * @description Application settings if NODE_ENV is 'mocha'
 * @implements IConfig
 * @returns object
 */

const SETTINGS_MOCHA_TESTING: IConfig = {
  name: 'mocha-testing',
  use_database: false,
  wipe_db_on_start: false,
  migrate_db_on_start: false,
  seed_db_on_start: false,
  public_url: 'http://localhost:3000',
  client_url: 'http://localhost:3000',
  cors: {
    origin: '*',
    allowedHeaders: ['X-Requested-With', 'content-type'],
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
}

/**
 * @property SETTINGS_PRODUCTION
 * @description Application settings if NODE_ENV is 'prod'
 * @implements IConfig
 * @returns object
 */

const SETTINGS_PRODUCTION: IConfig = {
  name: 'production',
  use_database: false,
  wipe_db_on_start: false,
  migrate_db_on_start: false,
  seed_db_on_start: false,
  public_url: 'http://localhost:3000',
  client_url: 'http://localhost:3000',
  cors: {
    origin: '*',
    allowedHeaders: ['X-Requested-With', 'content-type'],
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
}

/**
 * @property SETTINGS_TESTING
 * @description Application settings if NODE_ENV is 'test'
 * @implements IConfig
 * @returns object
 */

const SETTINGS_TESTING: IConfig = {
  name: 'testing',
  use_database: false,
  wipe_db_on_start: false,
  migrate_db_on_start: false,
  seed_db_on_start: false,
  public_url: 'http://localhost:3000',
  client_url: 'http://localhost:3000',
  cors: {
    origin: '*',
    allowedHeaders: ['X-Requested-With', 'content-type'],
    methods: ['GET', 'POST'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  },
}

/**
 * @property MySQL_CONNECTION
 * @description MySQL connection settings used by Knex
 * @implements IMySQL
 * @returns object
 */

export const getSettings = (): IConfig | null => {
  if (process.env.NODE_ENV === 'dev') return SETTINGS_DEVELOPMENT
  if (process.env.NODE_ENV === 'mocha') return SETTINGS_MOCHA_TESTING
  if (process.env.NODE_ENV === 'prod') return SETTINGS_PRODUCTION
  if (process.env.NODE_ENV === 'testing') return SETTINGS_TESTING
  return null
}

/**
 * @property MySQL_CONNECTION
 * @description MySQL connection settings used by Knex
 * @implements IMySQL
 * @returns object
 */

export const MYSQL_CONNECTION: IMySQL = {
  host: process.env.MYSQL_HOSTNAME ? process.env.MYSQL_HOSTNAME : '127.0.0.1',
  user: process.env.MYSQL_USERNAME ? process.env.MYSQL_USERNAME : 'root',
  password: process.env.MYSQL_PASSWORD ? process.env.MYSQL_PASSWORD : '',
  database: process.env.MYSQL_DATABASE ? process.env.MYSQL_DATABASE : 'Verci',
}

export const APP_PORT = process.env.PORT || 7777
export const RUNTIME_MODE = getSettings() != null ? getSettings()?.name : null
export const WIPE_DB_ON_START = getSettings() != null ? getSettings()?.wipe_db_on_start : null
export const MIGRATE_DB_ON_START = getSettings() != null ? getSettings()?.migrate_db_on_start : null
export const PUBLIC_URL = getSettings() != null ? getSettings()?.public_url : null
export const CLIENT_URL = getSettings() != null ? getSettings()?.client_url : null
export const CORS_OPTIONS = getSettings() != null ? getSettings()?.cors : null
