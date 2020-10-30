'use strict'

const chai = require('chai');
const chaiHTTP = require('chai-http');

const server = require('../app');
const Phone = require('../models/Phone')

const should = chai.should();
chai.use(chaiHTTP);

describe('phones', function () {

    Phone.collection.drop();

    beforeEach(function (done) {
        let phone = new Phone({
            id: Date.now(),
            name: 'Risqon',
            phone: '354'
        });
        phone.save(function (err) {
            done();
        })
    })

    afterEach(function (done) {
        // Phone.collection.drop();
        done()
    })

    it('Should list ALL phone on /api/phones GET', function (done) {
        chai.request(server)
            .get('/api/phones')
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('name');
                res.body[0].should.have.property('phone');
                res.body[0].name.should.equal('Risqon');
                res.body[0].phone.should.equal(354);
                done();
            })
    })

    // it('should list a single phone on /api/phones/<id> GET', function (done) {
    //     let phone = new Phone({
    //         id: Date.now(),
    //         name: 'Reky',
    //         phone: 'Gampang ya TDD'
    //     });
    //     chat.save(function (err, data) {
    //         chai.request(server)
    //             .get(`/api/phones/${data._id}`)
    //             .end(function (err, res) {
    //                 res.should.have.status(200);
    //                 res.should.be.json;
    //                 res.body.should.be.a('object');
    //                 res.body.should.have.property('_id');
    //                 res.body.should.have.property('name');
    //                 res.body.should.have.property('phone');
    //                 res.body.name.should.equal('Reky');
    //                 res.body.phone.should.equal('Gampang ya TDD');
    //                 done();
    //             })
    //     })
    // });

    it('should add a SINGLE phone on /api/phones POST', function (done) {
        const id = Date.now();
        chai.request(server)
            .post('/api/phones')
            .send({ id: id, 'name': 'Superman', 'phone': '313' })
            .end(function (err, res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('phone');
                res.body.should.have.property('id');
                res.body.name.should.equal('Superman');
                res.body.phone.should.equal(313);
                res.body.id.should.equal(id);
                done();
            })
    });

    it('should update a SINGLE phone on /api/phones/<id> PUT', function(done){
        chai.request(server)
        .get('/api/phones')
        .end(function(err, res){
          chai.request(server)
          .put(`/api/phones/${res.body[0].id}`)
          .send({id: res.body[0].id, 'name': 'Risqon al akhyar', phone : '08568971354'})
          .end(function(err, response){
            response.should.have.status(201);
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('phone');
            response.body.name.should.equal('Risqon al akhyar');
            response.body.phone.should.equal(8568971354);
            done();
          })
        })
      })

      it('should delete a SINGLE phone on /api/phones/<id> DELETE', function(done){
        chai.request(server)
        .get('/api/phones')
        .end(function(err, res){
          chai.request(server)
          .delete(`/api/phones/${res.body[0].id}`)
          .end(function(err, response){
            response.should.have.status(201)
            response.should.be.json;
            response.body.should.be.a('object');
            response.body.should.have.property('name');
            response.body.should.have.property('phone');
            response.body.name.should.equal('Risqon');
            response.body.phone.should.equal(354);
            done();
          })
        })
      })


});