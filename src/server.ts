import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'

const port = process.env.PORT || 3000
const httpServer = createServer(app)

// 👇 Socket.IO côté serveur
const io = new SocketIOServer(httpServer)

// 👂 Gérer les connexions
io.on('connection', (socket) => {
  console.log('✅ Nouveau client connecté')

  socket.on('hello', (data) => {
    console.log('📨 Reçu du client :', data)

    // Répondre au client
    socket.emit('serverResponse', { msg: 'Hello client!' })
  })

  socket.on('disconnect', () => {
    console.log('❌ Client déconnecté')
  })
})

httpServer.listen(port, () => {
  console.log(`🚀 Serveur sur http://localhost:${port}`)
})
