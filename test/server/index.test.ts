import app from '../../example/server'
import { agent as request } from 'supertest'

describe('Starting up the server.', () => {
    it('Path: (/cats), It should return a 200 status code.', (done) => {
        request(app).get('/api/v1/cats?name=lisa').expect(200, done)
    })
})
