import { Router } from 'express'
//import { helloController } from '../controllers/hello.controller'
import { renderIndexPage } from '../controllers/index.controller'

const router = Router()
router.get('/', renderIndexPage)

export default router
