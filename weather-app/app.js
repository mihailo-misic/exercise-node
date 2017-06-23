const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (errMsg, results) => {
    if (errMsg) {
        console.error(errMsg);
    } else {
        weather.getWeather(results, (errMsg, res) => {
            if (errMsg) {
                console.error(errMsg);
            } else {
                console.log(`Currently the temperature is: ${res.actualTemp}, but it feels like ${res.feelTemp}.`)
            }
        })
    }
});
