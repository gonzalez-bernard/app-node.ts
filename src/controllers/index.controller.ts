import { Request, Response } from 'express'
import { getIndexData } from '../models/indexData'

export function renderIndexPage(req: Request, res: Response) {
  const data = getIndexData()
  res.render('index', data)
}
