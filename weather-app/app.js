const request = require('request')

/* const url = 'http://api.weatherstack.com/current?access_key=6d0d1ea955a3a94f555a5bfe852d95dc&query=37.8267,-122.4233&units=f'

request ({ url: url, json: true}, (error, response) => {

if (error){
console.log('unable to connect to weather service!')
} 
else if(response.body.error){
console.log('Unable to find location')
}
else {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
}
}) */

//Geocoding
//Address -> Latitud/Longitud-> weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFxZTI2IiwiYSI6ImNrZDBseHN6MDBvbGQycWxvbnFzbzNwNDgifQ.abHEvbGpr8MKt_HaUfizjQ&limit=1'

request ({ url: geocodeURL, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to location ubication services!')
    } else if(response.body.features.length ===0 ){
        console.log('Unable to find location. Try another search.')
    }
    else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
        
const url = 'http://api.weatherstack.com/current?access_key=6d0d1ea955a3a94f555a5bfe852d95dc&query=37.8267,-122.4233&units=f'

request ({ url: url, json: true}, (error, response) => {

if (error){
console.log('unable to connect to weather service!')
} 
else if(response.body.error){
console.log('Unable to find location')
}
else {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
}
})
    }

})