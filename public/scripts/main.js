// Connexion Socket.IO client
const socket = io()

socket.on('connect', () => {
  console.log('✅ Connecté au serveur via Socket.IO')

  // Exemple : envoyer un message
  socket.emit('hello', { msg: 'Bonjour serveur !' })
})

socket.on('serverResponse', (data) => {
  console.log('📨 Réponse du serveur :', data)
})
