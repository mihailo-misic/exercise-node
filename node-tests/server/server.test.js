const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;


describe('Server', () => {
    describe('GET /', () => {
        it('Should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({error: 'Page not found'})
                })
                .end(done)
        });
    });

    describe('GET /users', () => {
        it('Should get me and my friends', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'Mihailo', age: 23})
                })
                .end(done)
        });
    });
});
