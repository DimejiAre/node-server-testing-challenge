const request = require('supertest');
const server = require('./server');

describe('server', ()=>{
    describe('[GET] / endpoint', () => {
        test('the db env is testing', ()=>{
            expect(process.env.DB_ENV).toBe('testing')
        })

        test('should return 200 ok', async ()=>{
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        test('should return 200 ok .then', ()=>{
            return request(server).get('/').then(response => {
                expect(response.status).toBe(200)
            })
        })

        test('returns the right body response', async ()=>{
            const response = await request(server).get('/')
            expect(response.body).toEqual('Hello World')
        })
    })
})