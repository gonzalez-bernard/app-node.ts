import express from 'express'
import path from 'path'
import routes from './routes'
import { notFoundHandler } from './middlewares/notFound.middleware'

const app = express()

// Configuration du moteur de vues
app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/', routes)
app.use(notFoundHandler)

export default app
