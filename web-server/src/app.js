const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//app.use() se usa para personalizar el servidor. Setup static directory to server
app.use(express.static(publicDirectoryPath))

//app.get() nos permite configurar lo que debe hacer el servidor
//cuando alguien intenta obtener algún recurso de una url en específico, ejemplo enviar un email incluye dos argumentos
//el primero es la ruta, la otra es la función donde describimos lo que queremos hacer cuando alguien visita esa ruta en particular 
//--------------------------------------------------------
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Raquel Parra'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Raquel Parra'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Raquel Parra'
    })
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.get('/help/*', (req, res) =>{
    res.render('404', {
     title: '404',
    name: 'Raquel Parra',
    errorMessage: 'Help article not found'
    })
})
app.get('*', (req,res) =>{
res.render('404', {
    title: '404',
    name: 'Raquel Parra',
    errorMessage: 'Page not found'
})
})

//app.listen() Esto inicia el servidor en un puerto en específico
app.listen(3000, (req, res) => {
    console.log('Server is up on port 3000')
}) 


