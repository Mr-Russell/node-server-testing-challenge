const request = require('supertest')
const server = require('./server.js')
const db = require('../data/dbConnection.js')

describe('server.js', ()=>{

  beforeEach(async ()=>{
    await db('people').truncate();
  })

  describe('GET /api/people', ()=>{
    it('Should return 200 OK', ()=>{
      return request(server)
        .get('/api/people')
        .then(res =>{
          expect(res.status).toBe(200)
        })
    })

  // describe('GET /api/people', ()=>{
  //   it ('Should return Status 200 OK', ()=>{
  //     return request(server)
  //       .get('/api/people')
  //       .then(res => {
  //         expect(res.status).toBe(200)
  //       })
  //   })
  })


})