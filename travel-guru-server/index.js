const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const places = require('./data/places.json')
const hotels = require('./data/hotels.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello from Travel-Guru-Server')
})

app.get('/places', (req, res) => {
    res.send(places)
})

app.get('/places/:id', (req, res) => {
    const id = req.params.id;
    const place = places.filter(item => item.id == id);
    res.send(place)
})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})

app.get('/hotels/:placeName', (req, res) => {
    const placeName = req.params.placeName;
    const hotelList = hotels.find(list => list.place == placeName);
    res.send(hotelList.hotels)
})

app.listen(port, () => {
    console.log(`The server is running from port: ${port}`)
})