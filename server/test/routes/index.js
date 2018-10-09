const chai = require('chai');
const supertest = require('supertest');
// const app = require('../../app');

// const api = supertest(app.listen());
const api = supertest('http://localhost:3001');
const expect = chai.expect;


describe('Home API', () => {

    describe('/GET ', () => {
        it('Home', (done) => {
            api.get('/')
                .expect(200)
                .end((err, res) => {
                    if(err) {
                        console.log('err');
                        console.log(err);
                        
                    }
                    console.log(res.body);
                    
                    
                    expect(res.body).to.be.an('object');
                    expect(res.body.page).to.be.equal('<h1> Home Page.</h1>');
                    done();
                });
        });
        
    });

});