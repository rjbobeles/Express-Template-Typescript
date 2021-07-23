export default class HttpExceptions extends Error {
  errors?: string | unknown

  constructor(message: string, errors?: string | unknown) {
    super()
    this.message = message
    this.errors = errors
  }

  getCode(): number {
    if (this instanceof BadRequest) return 400
    if (this instanceof Unauthorized) return 401
    if (this instanceof Forbidden) return 403
    if (this instanceof NotFound) return 404
    if (this instanceof MethodNotAllowed) return 405
    if (this instanceof UnprocessableEntity) return 422

    if (this instanceof InternalServerError) return 500
    if (this instanceof NotImplemented) return 501
    if (this instanceof BadGateway) return 502
    if (this instanceof ServiceUnavailable) return 503
    return 500
  }

  getStatus(): string {
    if (this instanceof BadRequest) return 'Bad Request'
    if (this instanceof Unauthorized) return 'Unauthorized'
    if (this instanceof Forbidden) return 'Forbidden'
    if (this instanceof NotFound) return 'Not Found'
    if (this instanceof MethodNotAllowed) return 'Method Not Allowed'
    if (this instanceof UnprocessableEntity) return 'Unprocessable Entity'

    if (this instanceof InternalServerError) return 'Internal Server Error'
    if (this instanceof NotImplemented) return 'Not Implemented'
    if (this instanceof BadGateway) return 'Bad Gateway'
    if (this instanceof ServiceUnavailable) return 'Service Unavailable'
    return 'Internal Server Error'
  }
}

export class BadRequest extends HttpExceptions {}
export class Unauthorized extends HttpExceptions {}
export class Forbidden extends HttpExceptions {}
export class NotFound extends HttpExceptions {}
export class MethodNotAllowed extends HttpExceptions {}
export class UnprocessableEntity extends HttpExceptions {}

export class InternalServerError extends HttpExceptions {}
export class NotImplemented extends HttpExceptions {}
export class BadGateway extends HttpExceptions {}
export class ServiceUnavailable extends HttpExceptions {}
