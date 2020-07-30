const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
//app.use() se usa para personalizar el servidor
app.use(express.static(publicDirectoryPath))

//app.get() nos permite configurar lo que debe hacer el servidor
//cuando alguien intenta obtener algún recurso de una url en específico, ejemplo enviar un email incluye dos argumentos
//el primero es la ruta, la otra es la función donde describimos lo que queremos hacer cuando alguien visita esa ruta en particular 
//--------------------------------------------------------

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
//app.listen() Esto inicia el servidor en un puerto en específico
app.listen(3000, () => {
    console.log('Server is up on port 3000')
}) 


