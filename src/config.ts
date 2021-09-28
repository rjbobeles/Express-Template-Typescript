import dotenv from 'dotenv'

import IConfig from './interfaces/config.interface'

dotenv.config()

/**
 * @property SETTINGS_DEVELOPMENT
 * @description Application settings if NODE_ENV is 'dev'
 * @implements IConfig
 * @returns object
 */

const SETTINGS_DEVELOPMENT: IConfig = {
  name: 'development',
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
  if (process.env.API_ENV === 'dev') return SETTINGS_DEVELOPMENT
  if (process.env.API_ENV === 'mocha') return SETTINGS_MOCHA_TESTING
  if (process.env.API_ENV === 'prod') return SETTINGS_PRODUCTION
  if (process.env.API_ENV === 'testing') return SETTINGS_TESTING
  return null
}

export const APP_PORT = process.env.PORT || 7777
export const RUNTIME_MODE = getSettings() != null ? getSettings()?.name : null
export const PUBLIC_URL = getSettings() != null ? getSettings()?.public_url : null
export const CLIENT_URL = getSettings() != null ? getSettings()?.client_url : null
export const CORS_OPTIONS = getSettings() != null ? getSettings()?.cors : null
