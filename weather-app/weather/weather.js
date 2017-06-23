const request = require('request');

let getWeather = (data, callback) => {
    request({
        url: `https://api.darksky.net/forecast/3feebc846f1779068dd3a6fa04bfaa50/${data.lat},${data.lng}`,
        json: true,
    }, (err, res, body) => {
        if (err) {
            callback('Unable to connect to Weather servers.');
        } else if (res.statusCode === 400) {
            callback('Unable to fetch weathers.');
        } else if (res.statusCode === 200) {
            let res = body.currently;

            callback(undefined, {
                actualTemp: ((res.temperature - 32) / (9 / 5)).toFixed(2),
                feelTemp: ((res.apparentTemperature - 32) / (9 / 5)).toFixed(2),
            });
        }
    });

};

module.exports = {
    getWeather,
};
