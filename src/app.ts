import cors from 'cors'
import express, { Express } from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'

import { RUNTIME_MODE } from './config'
import appRoutes from './routes/index'
import { errorHandler } from './middleware/'

const app: Express = express()

app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(hpp())

if (RUNTIME_MODE !== 'production' && RUNTIME_MODE !== 'mocha-testing') {
  app.use(morgan('dev'))
}

app.use(appRoutes)
app.use(errorHandler)

export default app
