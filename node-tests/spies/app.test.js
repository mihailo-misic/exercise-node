const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe("App", () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('Should call saveUser with user object', () => {
        let email = 'mihailo@example.com';
        let password = 'qwe';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password})
    })
});