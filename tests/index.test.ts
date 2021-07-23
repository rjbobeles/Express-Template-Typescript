import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

import { instance } from './hooks/server'

chai.use(chaiHttp)

describe('Instance Tests', async () => {
  before('Verify Server Instance', async () => {
    expect(instance).to.not.be.undefined
  })

  it('Should get 200 on ["/health"]', (done) => {
    chai
      .request(instance)
      .get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
  })
})
