let asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be numbers!');
            }
        }, 1500)
    })
};

asyncAdd(5, '7').then(
    (res) => {
        console.log(res);
        return asyncAdd(res, 33);
    }).then(
    (res) => {
        console.log('Should be 43', res)
    }).catch(
    (err) => {
        console.error(err)
    }
);

// let somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         // reject('Unable to fulfill promise.');
//     }, 2500);
// });
//
// somePromise.then(
//     (msg) => {
//         console.log('Success: ' + msg);
//     },
//     (err) => {
//         console.error('Error: ' + err);
//     });