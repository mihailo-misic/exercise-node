const request = require('request');

let geocodeAddress = (addrs, callback) => {
    let addr = encodeURIComponent(addrs);

    request({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr,
        json: true,
    }, (err, res, body) => {
        if (err) {
            callback('Unable to connect to Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find the mentioned address');
        } else if (body.status === 'OK') {
            let result = body.results[0];

            callback(undefined, {
                addr: result.formatted_address,
                lat: result.geometry.location.lat,
                lng: result.geometry.location.lng,
            });
        }
    });
};

module.exports = {
    geocodeAddress,
};