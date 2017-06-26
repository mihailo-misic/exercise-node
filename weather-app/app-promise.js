const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let addr = encodeURIComponent(argv.address);
let geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr;

axios.get(geocodeURL)
    .then((res) => {
        if (res.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.')
        }
        let lat = res.data.results[0].geometry.location.lat;
        let lng = res.data.results[0].geometry.location.lng;
        let weatherURL = `https://api.darksky.net/forecast/3feebc846f1779068dd3a6fa04bfaa50/${lat},${lng}`;
        console.log(res.data.results[0].formatted_address);

        return axios.get(weatherURL);
    })
    .then((res) => {
        let temp = res.data.currently.temperature;
        let aTemp = res.data.currently.apparentTemperature;
        console.log(`It's currently ${temp}. But feels like ${aTemp}`)
    })
    .catch((err) => {
        if (err.code === 'ENOTFOUND') {
            console.error('Unable to connect to API servers.')
        } else {
            console.error(err)
        }
    });