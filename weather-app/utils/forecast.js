const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=6d0d1ea955a3a94f555a5bfe852d95dc&query='+ latitude + ',' + longitude + '&units=f'
debugger
    request ({url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
        }
    })
}
module.exports = forecast