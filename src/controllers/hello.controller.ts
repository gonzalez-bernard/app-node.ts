import { Request, Response } from 'express'
import { getHelloMessage } from '../services/hello.service'

export function helloController(req: Request, res: Response) {
  res.json({ message: getHelloMessage() })
}
