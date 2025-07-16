import express from 'express'
import path from 'path'
import routes from './routes'
import { notFoundHandler } from './middlewares/notFound.middleware'

const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/api', routes)
app.use(notFoundHandler)

export default app
