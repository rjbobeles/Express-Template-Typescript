import consola from 'consola'
import { Server } from 'http'
import sinon from 'sinon'

import { init } from '../../src'

export let instance: Server | undefined = undefined

exports.mochaHooks = {
  async beforeAll() {
    sinon.stub(consola, 'ready')
    sinon.stub(consola, 'info')
    sinon.stub(consola, 'success')

    instance = await init()
  },

  async afterAll() {
    instance?.close()
  },
}
