const request = require('request');

let geocodeAddress = (addrs) => {
    return new Promise((resolve, reject) => {
        let addr = encodeURIComponent(addrs);

        request({
            url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addr,
            json: true,
        }, (err, res, body) => {
            if (err) {
                reject('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find the mentioned address');
            } else if (body.status === 'OK') {
                let result = body.results[0];

                resolve({
                    addr: result.formatted_address,
                    lat: result.geometry.location.lat,
                    lng: result.geometry.location.lng,
                });
            }
        });
    });
};

geocodeAddress('19146').then(
    (location) => {
        console.log(JSON.stringify(location, undefined, 2))
    },
    (err) => {
        console.error(err);
    });