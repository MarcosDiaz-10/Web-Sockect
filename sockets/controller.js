

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
      console.log('Cliente desconectado', socket.id)
    } )

    socket.on( 'enviar-mensaje' , ( payload, callback ) => {

        const { mensaje } = payload;

      const id = 123456;

      socket.broadcast.emit( 'enviar-mensaje', mensaje )
      
      callback(id)
    });
}

module.exports = {
    socketController
}