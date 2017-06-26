const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
    describe('Add', () => {
        it('Should add two numbers', () => {
            let res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');
        });

        it('Should async add two numbers', (done) => {
            utils.asyncAdd(4, 4, (res) => {
                expect(res).toBe(8).toBeA('number');
                done();
            });
        });
    });

    describe('Square', () => {
        it('Should square a number', () => {
            let res = utils.square(3);

            expect(res).toBe(9).toBeA('number');
        });

        it('Should async square a number', (done) => {
            utils.asyncSquare(3, (res) => {
                expect(res).toBe(9).toBeA('number');
                done();
            });
        });
    });

    describe('Names', () => {
        it('Should verify that first and last names were set', () => {
            let user = {age: 23, location: 'Belgrade',};
            let res = utils.setName(user, 'Mihailo Misic');

            expect(user).toEqual(res);
            expect(res).toInclude({firstName: 'Mihailo', lastName: 'Misic'})
        });
    });
});

// it('Should expect some values', () => {
//     // expect(12).toNotBe(11);
//     // expect({name: 'Andrew'}).toEqual({name: 'Andrew'})
//     // expect([2, 3, 4]).toExclude(1)
//     expect({
//         name: 'Me',
//         age: 23,
//         location: 'Philadelphia'
//     }).toInclude({
//         age: 23
//     })
// });