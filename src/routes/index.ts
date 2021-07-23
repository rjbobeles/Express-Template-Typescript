import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/health', async (req: Request, res: Response, next: any) => {
  res.json({
    status: res.statusCode,
    app_name: process.env.npm_package_name,
    app_version: process.env.npm_package_version,
    message: 'express-template-typescript backend service is running perfectly!',
  })
})

export default router
