const express = require('express');
const https= require('https');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res)=> {
    res.sendFile(__dirname + "/index.html")
})
app.post('/', (req,res) => {
    //console.log(req.body.cityName);
    const query = req.body.cityName
    const apiKey = '2860025725de1a9e5709f4bcb0f3c18e'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apiKey+'&units=metric'
    https.get(url, (response) => {
        //console.log(response);
        response.on('data', (data) => {
           // console.log(data);
           const weatherData = JSON.parse(data);
           const temp = weatherData.main.temp;
           const description = weatherData.weather[0].description 
           //console.log(temp);
           res.write("<h1>The temperature in "+query+" is " + temp + "degree celcius</h1>")
           res.write("<p>The weather condition is " + description + "</p>")
        })
    })
})


app.listen(3000, () => console.log("Our server is runnning at port 3000"))

  