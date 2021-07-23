/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Request, Response, NextFunction } from 'express'

import HttpExceptions from '../exceptions/httpExceptions'

export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpExceptions) {
    return res.status(err.getCode()).json({
      status: err.getStatus(),
      code: err.getCode(),
      message: err.message,
      error: err.errors,
    })
  }

  if (err instanceof Error) {
    return res.status(500).json({
      status: 'Internal Server Error',
      code: 500,
      message: err.message,
    })
  }
}
