const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const url = 'http://api.weatherstack.com/current?access_key=6d0d1ea955a3a94f555a5bfe852d95dc&query=37.8267,-122.4233&units=f'

// request ({ url: url, json: true}, (error, response) => {

// if (error){
//     console.log('unable to connect to weather service!')
// } 
// else if (response.body.error){
//     console.log('Unable to find location')
// } else {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
//     }
// })  

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast (44.1545,-75.7088,(error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })