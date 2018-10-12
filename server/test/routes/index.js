const chai = require('chai');
const supertest = require('supertest');
const api = supertest('http://localhost:3001');
const expect = chai.expect;


describe('Home API', () => {

    describe('Home ', () => {
        it('/GET', (done) => {
            api.get('/')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    expect(res.body.page).to.be.equal('<h1> Home Page.</h1>');
                    done();
                });
        });

    });

    describe('Login', () => {
        const userConfig = {
            account: 'account',
            password: 'jeni_password'
        };
        it('/Get login Page', (done) => {
            api.get('/login')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.be.an('object');
                    expect(res.body.page).to.be.equal('<h1> Login Page.</h1>');
                    done();
                });
        });
        it.skip('/POST ', (done) => {
            api.post('/login')
                .send(userConfig)
                .expect(200)
                .end((err,res) => {
                    if (err) {
                        console.log('err');
                        console.log(err);
                        throw new Error(err);
                    }
                    console.log('res');
                    console.log(res);
                    done();

                });
        });

    });

});