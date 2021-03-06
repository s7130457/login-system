const chai = require('chai');
const supertest = require('supertest');
const api = supertest('http://localhost:3001');
const expect = chai.expect;

const config = require('../../src/database/config');
const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});

const userConfig = {
    account: 'account',
    password: 'jeni_password'
};
describe('Home API', () => {

    it('Home /GET', (done) => {
        api.get('/')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.page).to.be.equal('<h1> Home Page.</h1>');
                done();
            });
    });
    it('Register /GET', (done) => {
        api.get('/register')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.page).to.be.equal('<h1> Register Page.</h1>');
                done();
            });
    });
    it('Login /GET', (done) => {
        api.get('/login')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.page).to.be.equal('<h1> Login Page.</h1>');
                done();
            });
    });
    it('Logout /POST', (done) => {
        api.post('/logout')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.page).to.be.equal('<h1> Logout Page.</h1>');
                done();
            });
    });

    describe('Register /POST', () => {
        it('success register', (done) => {
            api.post('/register')
                .send({
                    account: 'testAccount',
                    password: 'testPassword',
                    userName: 'testUserName'
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(200);
                    expect(res.body.error).to.be.equal(false);
                    expect(res.body.data).to.be.equal('success');
                    expect(res.body.msg).to.be.equal('Success Register.');
                    done();
                });
        });
        it('User already register.', (done) => {
            api.post('/register')
                .send({
                    account: 'testAccount',
                    password: 'testPassword',
                    userName: 'testUserName'
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(401);
                    expect(res.body.error).to.be.equal(true);
                    expect(res.body.msg).to.be.equal('User already register.');
                    expect(res.body.data).to.be.equal(null);
                    done();
                });
        });
        after(async () => {
            await knex('user')
                .where('account', 'testAccount')
                .del();
        });
    });
    describe('Login /POST', () => {
        it('success login', (done) => {
            api.post('/login')
                .send({
                    account: 'account',
                    password: 'jeni_password'
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(200);
                    expect(res.body.error).to.be.equal(false);
                    expect(res.body.data.account).to.be.equal(userConfig.account);
                    expect(res.body.data.password).to.be.equal(userConfig.password);
                    expect(res.body.msg).to.be.equal('Success Login.');
                    done();
                });
        });
        it('user not found in DB', (done) => {
            api.post('/login')
                .send({
                    account: 'errorAccount',
                    password: 'errorPassword'
                })
                .end((err, res) => {
                    expect(res.body.statusCode).to.be.equal(400);
                    expect(res.body.error).to.be.equal(true);
                    expect(res.body.msg).to.be.equal('Does not find user.');
                    expect(res.body.data).to.be.equal(null);
                    done();
                });
        });
        it('input error password', (done) => {
            api.post('/login')
                .send({
                    account: 'account',
                    password: 'errorPassword'
                })
                .end((err, res) => {
                    expect(res.status).to.be.equal(401);
                    expect(res.body.error).to.be.equal(true);
                    expect(res.body.data).to.be.equal(null);
                    expect(res.body.msg).to.be.equal('Error password.');
                    done();
                });
        });

    });
    after(() => {
        knex.destroy();
    });

});