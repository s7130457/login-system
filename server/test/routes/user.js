const chai = require('chai');
const supertest = require('supertest');
const api = supertest('http://localhost:3001/user');
const expect = chai.expect;

const userConfig = {
    account: 'account',
    password: 'jeni_password'
};
describe('User API', () => {

    describe('/GET ', () => {
        it('home', (done) => {
            api.get('/')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    expect(res.body.page).to.be.equal('<h1> User index (after login).</h1>');
                    done();
                });
        });

        it('info', (done) => {
            api.get('/info')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    expect(res.body.page).to.be.equal('<h1> User get info Page.</h1>');
                    done();
                });
        });
        
    });

});