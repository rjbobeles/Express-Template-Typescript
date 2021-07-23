import consola from 'consola'

import app from './app'
import * as config from './config'
import { Server } from 'http'

export const init = async (): Promise<Server> => {
  const instance = app.listen(config.APP_PORT, () => {
    consola.ready({
      message: `Server listening on port ${config.APP_PORT}! [Instance: ${config.RUNTIME_MODE}]`,
      badge: true,
    })
    consola.info(`Server accessible through: ${config.PUBLIC_URL}`)
  })

  return instance
}

if (config.RUNTIME_MODE !== 'mocha-testing') {
  init()
}
